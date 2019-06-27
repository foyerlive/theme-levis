console.debug('FoyerLiveTheme', __FLPACKAGE__, __FLPACKAGEVERSION__);

require('./scss/base.scss');
// require('./scss/troquer.scss');
// require('./scss/frankgreen.scss');
// require('./scss/officeworks.scss');
// require('./scss/rockem.scss');
// require('./scss/mainewellness.scss');
// require('./scss/foyer.scss');
// require('./scss/decathlon.scss');

import cms from './cms/index'; //.tazzana';
// import cms from './cms/index.frankgreen';
// import cms from './cms/index.officeworks';
// import cms from './cms/index.rockem';
// import cms from './cms/index.mainewellness'
// import cms from './cms/index.foyer';
// import cms from './cms/index.decathlon';

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
