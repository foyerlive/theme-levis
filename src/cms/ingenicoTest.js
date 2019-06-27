import React, {Component} from 'react';
import _ from 'lodash';

class IngenicoTest extends Component {

  state = {
    available: false,
    success: false,
    version: 'N/A'
  };

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    window.retrieveDataManager().ingenico.getVersion().then((version) => {
      console.debug('Igot', version);
      this.setState({
        available: true,
        success: true,
        version: version
      });

    }).catch((err) => {
      console.warn('Igoterr', err);
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.available ? 'Available' : 'Unavailable'}</div>
        <div>{this.state.version}</div>
        <div>{self.foyerHelperActionMUI('Ingenico Login', ev => {
          try {
            window.retrieveDataManager().ingenico.requestPayment(['a']).then(response => {
              console.log('I got the success', response);
            }).catch((err) => {
              console.log('I got the error', err);
            });
          } catch (err) {
            alert(err.message);
          }
        }, {
          color: 'primary'
        })}</div>
      </div>
    );
  }
}

export default IngenicoTest;