console.debug('FoyerLiveTheme', __FLPACKAGE__, __FLPACKAGEVERSION__, __FLVARIATION__);
require('./scss/levis.scss');

import cms from './cms/index.levis';
self.interactCMSContent = cms;
import 'animate.css/animate.min.css';

let appInfo = {};
appInfo[__FLPACKAGE__] = {
  version: __FLPACKAGEVERSION__,
  src: __FLPACKAGEVERSION__,
};
window.retrieveDataManager().socket.updateInfo({
  applications: appInfo,
});
