import React from 'react';
import _ from 'lodash';

export default class Specification extends React.Component {
  render() {
    const Product = this.props.product || this.props['data-rdl'].product; // Compatible with new RDL
    if (_.get(Product, 'attributes.specifications', false))
      return (
        <div className="product-specifications">
          <div dangerouslySetInnerHTML={{ __html: _.get(Product, 'attributes.specifications') }} />
        </div>
      );
    return null;
  }
}
