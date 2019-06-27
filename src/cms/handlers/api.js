import _ from 'lodash';

const API = retrieveDataManager();

export const apiFetch = async (url, options = {}, data = null) => {

  const requestOptions = _.defaultsDeep(options, {
    method: 'POST',
    headers: {
      Authorization: API.options.apiKey
    },
    body: JSON.stringify(data)
  });

  return API.request.fetch(API.bootOptions.api + url, requestOptions).then(res => {
    if( _.get(res,'success',false) )
      return res.data;
    if( _.get(res,'errors',false))
      return new Error(res.errors);

    return new Error('An error has occurred');
  }).catch(error => {
    console.debug('apiFetchException', error);
    return new Error('Failed to complete order...');
  });
};

