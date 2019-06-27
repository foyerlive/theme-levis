export const demoMode = false;

// New structures...
import viewportStructure, { demoViewportStructure } from './mainewellness/viewport';
import demoHomeContainerStructure from './mainewellness/demoHomeContainer';
import homeContainerStructure, { loggedInHomeStructure } from './mainewellness/homeContainer';
import accountExploreContainerStructure from './mainewellness/accountExploreContainerStructure';
import productContainerStructure, { demoProductContainerStructure } from './mainewellness/productContainer';
import accountCartContainerStructure from './mainewellness/accountCartContainerStructure';
import cartContainerStructure from './mainewellness/cartContainer';
import cartSuccessContainerStructure from './mainewellness/cartSuccessContainer';
import cartPreviewContainerStructure from './mainewellness/cartPreviewStructure';
import cartItem from './mainewellness/cartItem';
import productListItemStructure from './mainewellness/productListItemStructure';
import confirmDetailsFormContainerStructure from './mainewellness/confirmDetailsFormContainerStructure';
import confirmOrderNotificationContainerStructure from './mainewellness/confirmOrderNotificationContainerStructure';
import { hooks } from './mainewellness/hooks';

// CMS Screens
import termsStructure from './mainewellness/screens/terms';

// Config
let sessionTimeout = 1000 * 60;
if (!__ISPROD__) sessionTimeout = 1000 * 300000;

let cms = {
  currencyLocale: 'en-US',
  currencyFormat: {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  },
  includeSiblingCategories: false,
  // forcedTimeout: 1000 * 60 * 5, // DEFAULT RETURN TO HOME (must be greater than warning
  sessionTimeout: sessionTimeout, // Wait 60 seconds before showing dialog
  // sessionTimeoutDialogTime: 1000 * 30, // Show dialog for 30 seconds...

  indexContainerStructure: demoMode ? demoViewportStructure : viewportStructure,
  homeContainerStructure: demoMode ? demoHomeContainerStructure : homeContainerStructure,
  loggedInHomeContainerStructure: loggedInHomeStructure,
  accountExploreContainerStructure,
  accountCartContainerStructure,
  productContainerStructure: demoMode ? demoProductContainerStructure : productContainerStructure,
  cartContainerStructure: cartContainerStructure,
  cartSuccessContainerStructure: cartSuccessContainerStructure,
  cartItemStructure: cartItem,
  cartEnabled: true,
  forceAccountCart: true,
  autoConfigure: true,
  groupProductListOptions: true,
  defaultLocale: 'en-US',
  hooks,
  accountLoginFormType: 'counterpoint',
  displayTermsAndConditionsForConciergeRequests: true,
  pages: {
    terms: termsStructure,
  },
  productListItemStructure,
  productListItemsDefaultSortingRefs: ['attributes.total_sales'],
  productListItemsDefaultSortingDirections: ['desc'],
  cartPreviewContainerStructure: cartPreviewContainerStructure,
  customFormContainerStructure: {
    appointment: confirmDetailsFormContainerStructure,
    order: confirmOrderNotificationContainerStructure,
  },
};

import muiTheme from './mainewellness/muitheme';

/* Mui Theme */
cms.theme = muiTheme;
export default cms;
