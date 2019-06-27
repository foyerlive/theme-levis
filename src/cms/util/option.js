import _ from 'lodash';
import debug from 'debug';

const d = debug('theme:option');

let api = false;

/**
 * Retrieves configuration options for Transact at different levels based on the priority:
 * Device > Device Custom > Organisation > Theme > Transact Default
 *
 * @todo Add Channel & Location priority levels.
 * @param {*} reference
 * @param {*} defaultValue
 */
export const getOption = (reference, defaultValue = null) => {
  if (!api) api = retrieveDataManager();
  let returnValue = defaultValue;

  // Priority 1 -> Device custom config
  if (_.has(api, 'options.modules.interact.options.' + reference)) {
    returnValue = _.get(api, 'options.modules.interact.options.' + reference, defaultValue);
    d('DEVICE', reference, returnValue);
    return returnValue;
  }

  // Priority 2 -> Device custom config
  if (_.has(api, 'options.custom.transact.' + reference)) {
    returnValue = _.get(api, 'options.custom.transact.' + reference, defaultValue);
    d('DEVICECUSTOM', reference, returnValue);
    return returnValue;
  }

  // Priority 3 -> Organisation config
  if (_.has(api, 'options.Organisation.data.configuration.transact.' + reference)) {
    returnValue = _.get(api, 'options.Organisation.data.configuration.transact.' + reference, defaultValue);
    d('ORGANISATION', reference, returnValue);
    return returnValue;
  }

  // Priority 4 -> Theme config
  if (_.has(self, 'interactCMSContent.' + reference)) {
    returnValue = _.get(self, 'interactCMSContent.' + reference, defaultValue);
    d('THEME', reference, returnValue);
    return returnValue;
  }

  // Priority 5 -> Transact theme default value
  d('DEFAULT', reference, returnValue);
  return defaultValue;
};

export const getThemeOption = (reference, defaultValue = null) => {
  let returnValue = defaultValue;

  if (_.has(self, 'interactCMSContent.' + reference)) {
    returnValue = _.get(self, 'interactCMSContent.' + reference, defaultValue);
    d('THEMEONLY', reference, returnValue);
    return returnValue;
  }

  d('TRANSACTONLY', reference, returnValue);
  return defaultValue;
};
