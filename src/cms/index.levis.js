// New structures...
import viewPort from './levis/viewport'
import homeContainer from './levis/homeContainer'
import productListItem from './levis/productListItem'
import productContainer, { ReviewItem } from './levis/productContainer'
import cartContainer, { CartItem, CartSuccess } from './levis/cartContainer'
 
// Config
let sessionTimeout = 1000 * 60;
if (!__ISPROD__) sessionTimeout = 1000 * 12000;

let cms = {
  currencyLocale: 'en-US',
  currencyFormat: {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  },
  sessionTimeout: sessionTimeout, // Wait 60 seconds before showing dialog
  scanToLogin: false, // You can use the barcode scanner to initiate a login...
  cartRedirect: true,
  groupProductListOptions: true,
  defaultLocale: 'en-US',
  locale: {
    'en-US': {
      CART_TITLE: 'Shopping List',
      CART_EMPTY: 'Clear List',
      CART_NO_ITEMS: 'Nothing to see here.',
    },
  },
  accountLoggedInRedirect: '/transact/account/explore',
  productListScrollParentDepth: 3,
  searchResultsScrollParentDepth: 1,
  searchMinLength: 3,
  minimumVariationsRequiredForConfigure: 0, // Shopify - every product has a variation...
  autoScrollTop: true, // Automatically scroll to the top

  browseHideHeader: true,
  browseHideCategoryButtons: true,
  cartEnabled: true,
  autoConfigure: true,

  indexContainerStructure: viewPort,
  homeContainerStructure: homeContainer,
  productListItemStructure: productListItem,
  productContainerStructure: productContainer,
  reviewItemComponentStructure: ReviewItem,
  cartContainerStructure: cartContainer,
  cartItemStructure: CartItem,
  cartSuccessContainerStructure: CartSuccess,
};

import muiTheme from './levis/muitheme';

/* Mui Theme */
cms.theme = muiTheme;
export default cms;
