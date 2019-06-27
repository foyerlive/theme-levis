import {onShopifyAccountLoginByCustomerId} from '../handlers/shopifyAccountLoginByCustomerId';

export const hooks = {
  // onAccountRecover: {
  //   handler: onAccountRecoverHandler
  // },
  onAccountLogin: {
    handler: onShopifyAccountLoginByCustomerId,
    successRedirect: '/transact/account/explore'
  },
  onAccountLoginByBarcode: {
    handler: onShopifyAccountLoginByCustomerId,
    successRedirect: '/transact/account/explore'
  }
  // onAccountRegister: {
  //   handler: onAccountRegistrationHandler,
  //     successRedirect: '/transact/account/cart'
  // },
  // onProductDisplay: {
  //   handler: onProductDisplayHandler
  // },
  // onAccountOrder: {
  //   handler: onAccountCartSubmission,
  //   // successRedirect: '/transact/cms/done'
  // }
};