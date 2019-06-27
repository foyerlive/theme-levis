// New structures...
import viewportStructure from './foyer/viewport';
import homeContainerStructure from './foyer/homeContainer';
import productContainerStructure from './foyer/productContainer';
import cartContainerStructure from './foyer/cartContainer';
import cartItem from './foyer/cartItem';

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
  sessionTimeout: sessionTimeout, // Wait 60 seconds before showing dialog

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
  hooks,
  accountLoggedInRedirect: '/transact/account/explore',
};

import muiTheme from './foyer/muitheme';

/* Mui Theme */
cms.theme = muiTheme;
export default cms;
