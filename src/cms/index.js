// New structures...
import viewportStructure from './viewport';
import productContainerStructure from './productContainer';
import homeContainerStructure from './homeContainer';
import cartContainerStructure from './cartContainer';
import cartItem from './cartItem';

import { hooks } from './hooks/shopify';

// Config
let sessionTimeout = 1000 * 60;
if (!__ISPROD__) sessionTimeout = 1000 * 120;

let cms = {
  currencyLocale: 'en-US',
  currencyFormat: {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  },
  // forcedTimeout: 1000 * 60 * 5, // DEFAULT RETURN TO HOME (must be greater than warning
  sessionTimeout: sessionTimeout, // Wait 60 seconds before showing dialog
  // sessionTimeoutDialogTime: 1000 * 30, // Show dialog for 30 seconds...

  indexContainerStructure: viewportStructure,
  homeContainerStructure: homeContainerStructure,
  productContainerStructure: productContainerStructure,
  cartContainerStructure: cartContainerStructure,
  scanToLogin: true, // You can use the barcode scanner to initiate a login...
  cartItemStructure: cartItem,
  cartRedirect: true,
  autoConfigure: true,
  groupProductListOptions: true,
  defaultLocale: 'en-US',
  /*
  locale: {
    'en-US': {}
  },
  */
  hooks,
  accountLoggedInRedirect: '/transact/account/explore',
};

import muiTheme from './muitheme';
/* Mui Theme */
cms.theme = muiTheme;
export default cms;
