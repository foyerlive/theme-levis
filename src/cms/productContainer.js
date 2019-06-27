import React, {Component} from 'react';
import _ from 'lodash';

class SizingInfo extends Component {
  render() {
    const Product = this.props.product || this.props['data-rdl'].product; // Compatible with new RDL
    if (_.get(Product, 'attributes.sizing', false))
      return (
        <div className="product-sizing">
          <div dangerouslySetInnerHTML={{__html: _.get(Product, 'attributes.sizing')}}></div>
        </div>
      );
    return null;
  }
}

class Fabric extends Component {
  render() {
    const Product = this.props.product || this.props['data-rdl'].product; // Compatible with new RDL
    if (_.get(Product, 'attributes.care', false))
      return (
        <div className="product-sizing">
          <div dangerouslySetInnerHTML={{__html: _.get(Product, 'attributes.care')}}></div>
        </div>
      );
    return null;
  }
}

class StoreQTY extends Component {

  getLocation(code) {
    const locations = this.props.locations;
    if (false)
      return _.sample(locations);
    // console.debug('getLocation',code,locations);
    return _.find(locations, ['code', String(code)]);
  }

  render() {
    const store = this.getLocation(this.props.locationCode);
    const {qty} = this.props;
    if (!qty)
      return null;
    return (
      <div style={{display: 'grid', gridTemplateColumns: '1fr 3fr', marginBottom: '1rem'}}>
        <div style={{fontSize: '1.5rem'}}>{this.props.qty} available:</div>
        <div style={{fontSize: '1.5rem'}}>
          <div dangerouslySetInnerHTML={{__html: 'CUE ' + _.get(store, 'name', 'Missing')}}/>
          <div dangerouslySetInnerHTML={{__html: _.get(store, 'address1', 'Missing Address')}}/>
          <div
            dangerouslySetInnerHTML={{__html: _.get(store, 'city', 'City') + ', ' + _.get(store, 'region', 'State')}}/>
        </div>
      </div>
    )
  }
}

class Availability extends Component {

  state = {
    loaded: false,
    selectedVariation: false,
    display: false,
    inventory: [],
    error: false
  };

  findVariation(variations, query) {
    const Product = this.props.product || this.props['data-rdl'].product; // Compatible with new RDL
    // Loop through options removing variations that don't match query
    let attributes = Object.keys(query).filter((key) => {
      if (key !== 'highlightColor' && key !== 'galleryIdx')
        return key;
    });
    if (!attributes.length) return false;

    // Find variations that match the selected attributes
    let matching = _.filter(variations, (variation) => {
      let found = true;
      attributes.forEach((attribute) => {
        let attributeValue = _.get(variation, 'attributes.' + attribute, 'missing');
        // Have to have the attribute...
        if (attributeValue == 'missing')
          found = false;
        // Query has to have an attribute
        if (_.get(query, attribute, 'missing') == 'missing')
          found = false;
        // Have to match
        if (query[attribute] && attributeValue !== query[attribute])
          found = false;
      })
      return found;
    });

    // Return it if available... and all options are selected..
    if (matching.length == 1 && attributes.length == _.get(Product, 'options', []).length)
      return matching[0];

    return false;
  }

  getLocation(code) {
    const locations = this.props['data-rdl'].locations;
    return _.find(locations, ['code', code]);
  }

  componentDidMount() {
    this.checkProduct();
  }

  componentDidUpdate(prevProps, prevState) {
    this.checkProduct();
  }

  getLocation(code) {
    const locations = this.props['data-rdl'].locations;
    if (false)
      return _.sample(locations);
    // console.debug('getLocation',code,locations);
    return _.find(locations, ['code', String(code)]);
  }

  checkProduct() {
    const {selectedVariation} = this.state;
    const Product = this.props.product || this.props['data-rdl'].product; // Compatible with new RDL
    let ProductVariation = this.findVariation(Product.variations, _.get(this.props['data-rdl'].location, 'query', {}));
    if (ProductVariation) {
      if (selectedVariation !== ProductVariation.upc) {
        // We have a new VALID selected variation...

        // Product display hook
        if (_.has(self, 'interactCMSContent.hooks.onProductDisplay')) {
          let handler = _.get(self, 'interactCMSContent.hooks.onProductDisplay.handler', self.interactCMSContent.hooks.onProductDisplay);
          handler.apply(null, [ProductVariation.upc, Product]).then((res) => {
            console.info('receivedOnProductDisplayResult', res);
            if (res.length == 1) {
              this.setState({
                loaded: true,
                inventory: res[0]['stores'],
                error: false
              });
            } else {
              this.setState({
                loaded: true,
                inventory: [],
                error: 'None available in-store...'
              })
            }

          }).catch((err) => {
            this.setState({
              loaded: true,
              inventory: [],
              error: 'Error: ' + err
            });
            console.warn('receivedOnProductDisplayResultErr', err);
          });
        }

        this.setState({
          inventory: [],
          loaded: false,
          selectedVariation: ProductVariation.upc
        });
      }
    } else {
      if (selectedVariation)
        this.setState({
          selectedVariation: false,
          display: false,
          inventory: []
        });
    }
  }

  render() {
    const Product = this.props.product || this.props['data-rdl'].product; // Compatible with new RDL

    let ProductVariation = this.findVariation(Product.variations, _.get(this.props['data-rdl'].location, 'query', {}));
    let locationInventory = _.get(ProductVariation, 'locationInventory', {});
    let totalAvailable = _.reduce(locationInventory, (result, value, key) => {
      return result + value;
    }, 0);
    /*
    if (!totalAvailable)
      return null;
      */
    const {selectedVariation, error} = this.state;

    let output = [];
    this.state.inventory.forEach((storeInv) => {
      const store = this.getLocation(storeInv['storeID']);
      if (store) {
        output.push({
          store: store,
          storeID: storeInv['storeID'],
          quantity: storeInv.quantity,
          group: store.region
        });
      }
    });
    return (
      <div className="product-availability">
        <Choose>
          <When condition={selectedVariation}>
            <div className="continue">
              {self.foyerHelperAction('Find In-Store', (ev) => {
                this.setState({
                  display: !this.state.display
                })
              }, 'btn-check-availability')}
            </div>
          </When>
          <Otherwise>
            <div className="continue">
              {self.foyerHelperAction('Find In-Store', (ev) => {
              }, 'btn-check-availability disabled')}
            </div>
          </Otherwise>
        </Choose>
        <If condition={this.state.display && ProductVariation}>
          <div>
            <h1>In-Store Availability</h1>
            <Choose>
              <When condition={error}>
                <h2 style={{fontSize: '1.5rem'}}>{error}</h2>
              </When>
              <When condition={this.state.loaded}>
                <For each="locInv" of={_.orderBy(output, ['group', 'store.name'], ['asc', 'asc'])}>
                  <StoreQTY key={'loc-' + index} locations={this.props['data-rdl'].locations}
                            locationCode={locInv['storeID']}
                            qty={locInv['quantity']}/>
                </For>
                <If condition={false}>
                  <For each="locInv" of={this.state.inventory}>
                    <StoreQTY key={'loc-' + index} locations={this.props['data-rdl'].locations}
                              locationCode={locInv['storeID']}
                              qty={locInv['quantity']}/>
                  </For>
                </If>
              </When>
              <Otherwise>
                <center>Loading...</center>
              </Otherwise>
            </Choose>
          </div>
        </If>
      </div>
    );
  }
}

/*
            <If condition={false}>
              <For each="locInv" of={_.toPairs(locationInventory)}>
                <StoreQTY key={index} locations={this.props['data-rdl'].locations} locationCode={locInv[0]}
                          qty={locInv[1]}/>
              </For>
            </If>

 */
const oldproductContainerStructure = {
  className: 'product-container-portrait',
  children: [
    {
      className: 'product-content',
      children: [
        // {
        //   className: 'product-gallery-wrapper',
        //   children: [
        //   ]
        // },
        {
          className: 'product-content-wrapper',
          children: [
            'name',
            'rating',
            'priceFull',
            'gallery',
            'checkout',
            <Availability/>,
            {
              node: 'dynamicTabs',
              children: [
                {
                  title: 'Description',
                  children: [
                    'features'
                  ]
                },
                {
                  title: 'Size & Measurements',
                  children: [
                    <SizingInfo/>,
                  ]
                },
                {
                  title: 'Fabric',
                  children: [
                    <Fabric/>
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  ]
};

const productContainerStructure = {
  className: 'product-container-row',
  children: [
    {
      className: 'container-left',
      children: [
        'gallery',
      ]
    },
    {
      className: 'container-right',
      children: [
        'name',
        'priceFull',
        // 'rating',
        'features',
        'checkout',
      ]
    }
  ]
};

const portraitProductContainerStructure = {
  className: 'product-container-grid',
  children: [
    'name',
    'priceFull',
    'gallery',
    'features',
    'checkout'
  ]
};

export default portraitProductContainerStructure;
// export default productContainerStructure;