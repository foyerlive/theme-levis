import _ from 'lodash';

import {apiFetch} from './api';

const authCustomer = async (user,password) => {
  return apiFetch('/api/customer/authenticate', null, {username: user, password: password}).then(res => {
    return res;
  });
};

export const handleStandardAccountLogin= async (values, dispatch) => {

  return authCustomer(values.email,values.password).then((customerData) => {
    console.info('onAccountLoginHandler->handleStandardAccountLogin', customerData);
    if (customerData instanceof Error)
      return customerData;
    // Clean out current user - just in case...
    dispatch({
      type: 'ACCOUNT_LOGOUT'
    });

    dispatch({
      type: 'ACCOUNT_LOGIN_SUCCESS',
      accountType: 'MAGENTO',
      accountId: customerData.customer_id,
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
