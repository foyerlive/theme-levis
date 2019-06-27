import _ from 'lodash';

import { apiFetch } from './api';

const guestCheckout = async packet => {
  return apiFetch('/api/checkout/guest', null, packet).then(res => {
    return res;
  });
};

const tokenizeCreditCard = async details => {
  // return {id: "tok_2izDwQTcLNVB2vo3x", livemode: true, used: false, object: "token"};
  // return {id: "tok_2iz65GZ721Sbj9oZR", livemode: true, used: false, object: "token"};
  // return {id: "tok_2iy8g8XHM7wtWiCk6", livemode: false, used: false, object: "token"};
  // window.initializeConekta('key_UyJ2ZEBSFjg2xoHxgxxNkyA'); // Troquer
  // window.initializeConekta('key_UyJ2ZEBSFjg2xoHxgxxNkyA'); // Troquer
  if (__ISPROD__) {
    window.initializeConekta('key_UyJ2ZEBSFjg2xoHxgxxNkyA'); // Troquer
  } else {
    window.initializeConekta('key_Ocqvhx4eNqnSww3Sq9VxHuQ'); // Mine
  }
  let token = await window.tokenizeConekta(details);
  // console.info('GotTheToken', token);
  return token;
};

export const onMagentoGuestCheckout = async (values, dispatch) => {
  // console.info('onMagentoGuestCheckout', values, dispatch);

  // Tokenify Credit Card details
  let token = await tokenizeCreditCard({
    card: {
      number: values.cc_number,
      name: values.cc_name,
      exp_year: values.cc_expiry_year,
      exp_month: values.cc_expiry_month,
      cvc: values.cc_cvv,
    },
  });

  // console.info('Tokenized', token);

  // Do Magento Checkout...
  let checkoutRequest = {
    cartItems: values.cartItems,
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    phone: values.phone,
    shippingAddress: {
      firstName: values.firstName,
      lastName: values.lastName,
      address1: values.address1, // Calle
      address2: values.address2, // Num. Exterior y Num. Interior
      address3: values.municipality, // Delegación o municipio
      city: values.city, // Colonia
      province: values.province, // Estado
      postalCode: values.zip, // Codigo Postal
      countryCode: values.countryCode, // Country
      phone: values.phone,
      provinceCode: values.provinceCode,
    },
    billingMatchesShipping: true,
    paymentDetails: {
      token: token.id,
    },
  };
  // console.info('GuestCheckoutPacket', checkoutRequest);
  return guestCheckout(checkoutRequest);
  // .then(response => {
  //   if (response instanceof Error)
  //     return response;
  //   return new Error('SUCCESS!');
  // })
};
