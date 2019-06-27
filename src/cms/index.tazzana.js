import importedCms from './index';
import _ from 'lodash';

// console.log('IGotIt', cms);

const myCms = {...importedCms};

const tazzannaGrey = '#77787B';

_.set(myCms, 'theme.overrides.MuiIconButton.root.color', tazzannaGrey);

export default myCms;