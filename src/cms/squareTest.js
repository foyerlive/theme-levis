import React, {Component} from 'react';
import _ from 'lodash';

class SquareTest extends Component {

  state = {
    available: false,
    success: false
  };

  constructor(props, context) {
    super(props, context);
    this.listener = this.listener.bind(this);
  }

  listener(event) {
    // console.debug('this way', event);
    if (_.get(event, 'type', false) == 'deeplink') {
      let url = _.get(event, 'url', false);
      if (url) {
        var parsedUrl = new URL(decodeURI(url));
        var data = parsedUrl.searchParams.get('data');
        var decodedData = JSON.parse(data);
        let valid = {status: 'ok', client_transaction_id: '3420857D-BD2A-4509-B198-57C25EC7A7F3'}
        let success = {
          status: 'ok',
          transaction_id: 'Z4kHAWbwAe7yfkOsaDdjrg4eV',
          client_transaction_id: '4179E45A-49A6-4EBA-B799-3B665E08618B'
        };
        let error = {error_code: 'payment_canceled', status: 'error'};
        let otherError = {error_code: 'location_id_mismatch', status: 'error'};
        //[Log] DECODED –
        console.log('DECODED', decodedData); // 123
      }
    }
  }

  componentDidMount() {
    window.retrieveDataManager().addListener('socket-event', this.listener, true);
    window.retrieveDataManager().square.installed().then((res) => {
      this.setState({
        available: res
      });
      console.log('SquareInstalled', res);
    }).catch(err => {
      console.warn('SquareException', err);
    });
  }

  componentWillUnmount() {
    window.retrieveDataManager().removeListener('socket-event', this.listener);
  }

  render() {
    return (
      <div>
        <div>{this.state.available ? 'Available' : 'Unavailable'}</div>
        <div>{this.state.success ? 'PAID!' : 'No payment...'}</div>
        <div>{self.foyerHelperActionMUI('Square Demo Payment', ev => {
          try {

            let dataParameter = {
              amount_money: {
                amount: '105',
                currency_code: 'USD'
              },
              callback_url: 'foyerlive://square',
              client_id: 'sq0idp-3J9LpQOeAhhhv4oPx-3hWg', // Replace this value with your application's ID
              version: '1.3',
              location_id: 'K80NJZZT587P4',
              notes: 'notes for the transaction',
              options: {
                skip_receipt: true,
                auto_return: false,
                supported_tender_types: ['CREDIT_CARD']//, 'CASH']
              }
            };
            window.retrieveDataManager().square.startPayment(dataParameter).then(response => {
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

export default SquareTest;