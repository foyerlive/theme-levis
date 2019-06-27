import homeContainerStructure from './troquer/homeContainer';
import viewportStructure from './troquer/viewport';
import productContainerStructure from './troquer/productContainer';
import cartContainerStructure from './troquer/cartContainer';
import cartItemStructure from './troquer/cartItem';
import muiTheme from './troquer/muiTheme';
import importedCms from './index';

importedCms.homeContainerStructure = homeContainerStructure;
importedCms.indexContainerStructure = viewportStructure;
importedCms.productContainerStructure = productContainerStructure;
importedCms.cartContainerStructure = cartContainerStructure;
importedCms.cartItemStructure = cartItemStructure;

import _ from 'lodash';

import { hooks } from './hooks/magento';

const myCms = { ...importedCms };

const troquerBlack = '#181818';

_.set(myCms, 'theme', muiTheme);
_.set(myCms, 'defaultLocale', 'es-MX');
_.set(myCms, 'accountLoginFormType', 'standard');
_.set(myCms, 'hooks', hooks);

_.set(myCms, 'sessionTimeout', 500 * 1000);
_.set(myCms, 'attractTimeout', 120 * 1000);
_.set(myCms, 'forcedTimeout', 125 * 1000);

if (false && !__ISPROD__) {
  _.set(myCms, 'sessionTimeout', 15 * 1000 * 1);
  _.set(myCms, 'attractTimeout', 10 * 1000 * 1);
  _.set(myCms, 'forcedTimeout', 20 * 1000 * 1);
}

_.set(myCms, 'cartRedirect', false);

_.set(myCms, 'productAPIOptions', {
  indexOptions: [
    {
      field: 'name',
      boost: 3,
    },
    // {
    //   field: 'attributes.last6',
    //   boost: 2
    // },
    {
      field: 'sku',
      boost: 1,
    },
  ],
});

_.set(myCms, 'currencyLocale', 'en-MX');
_.set(myCms, 'currencyFormat', {
  style: 'currency',
  currency: 'USD', // Not using MXN as it then puts in MX
  minimumFractionDigits: 0,
});
export default myCms;
