import _ from 'lodash';

import {apiFetch} from './api';

const lookupCustomerById = async (customerId) => {
  return apiFetch('/api/customers/byId', null, {id: customerId}).then(res => {
    return res;
  });
};

export const onShopifyAccountLoginByCustomerId = async (values, dispatch) => {
  if (!_.has(values, 'cardId'))
    return new Error('Invalid Card Number');

  let customerId = values.cardId;
  return lookupCustomerById(customerId).then((customerData) => {
    if (customerData instanceof Error)
      return customerData;
    // Clean out current user - just in case...
    dispatch({
      type: 'ACCOUNT_LOGOUT'
    });

    dispatch({
      type: 'ACCOUNT_LOGIN_SUCCESS',
      accountType: 'SHOPIFY',
      accountId: customerData.id,
      accountData: customerData
    });

    // Load the orders into redux...
    _.forEach(_.get(customerData, 'Orders', []), (Order) => {
      dispatch({
        type: 'ACCOUNT_ORDER_LOAD_SUCCESS',
        orderId: Order.id,
        orderData: Order
      });
    });
    return true;
  }).catch((err) => {
    console.warn('onAccountLoginHandler->onShopifyAccountLoginByCustomerId', err);
    throw new Error('Error communicating with server.');
  });
};
