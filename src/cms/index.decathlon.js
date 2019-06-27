// New structures...
import viewportStructure from './decathlon/viewport';
import homeContainerStructure from './decathlon/homeContainer';
import productContainerStructure from './decathlon/productContainer';
import productListItemStructure from './decathlon/productListItemStructure';
import reviewItemStructure from './decathlon/reviewItemStructure';
import cartContainerStructure from './decathlon/cartContainer';
import cartSuccessContainerStructure from './decathlon/cartSuccessContainer';
import cartItem from './decathlon/cartItem';
import { hooks } from './decathlon/hooks';

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
  reviewItemComponentStructure: reviewItemStructure,
  cartSuccessContainerStructure: cartSuccessContainerStructure,
  productListItemStructure,
  scanToLogin: true, // You can use the barcode scanner to initiate a login...
  cartItemStructure: cartItem,
  cartRedirect: true,
  autoConfigure: false,
  groupProductListOptions: true,
  defaultLocale: 'en-US',
  locale: {
    'en-US': {
      CART_TITLE: 'Shopping List',
      CART_EMPTY: 'Clear List',
      CART_NO_ITEMS: 'Nothing to see here.',
    },
  },
  hooks,
  accountLoggedInRedirect: '/transact/account/explore',
  productListScrollParentDepth: 3,
  searchResultsScrollParentDepth: 1,
  searchMinLength: 1,
  minimumVariationsRequiredForConfigure: 0, // Shopify - every product has a variation...
  autoScrollTop: true, // Automatically scroll to the top
};

import muiTheme from './decathlon/muitheme';

/* Mui Theme */
cms.theme = muiTheme;
export default cms;
