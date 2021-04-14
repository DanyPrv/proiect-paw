import { merge } from 'lodash';
import { appActions } from '../containers/App/slice';
import { dispatch, store } from '../store/store';

// eslint-disable-next-line import/no-cycle

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if (response.status === 401) {
    dispatch(appActions.logout());
    window.location.href = '/login';
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @param  {boolean} [withBearer] Add bearer token to request
 *
 * @return {object}           The response data
 */
export default function request(url, options, withBearer = true) {
  const finalUrl = process.env.REACT_APP_API_BASE_URL + url;
  let headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
  if (withBearer) {
    headers = { ...headers, Authorization: `Bearer ${store.getState().app.user.token}` };
  }
  const baseOptions = {
    headers,
  };
  const finalOptions = merge(baseOptions, options);
  return fetch(finalUrl, finalOptions)
    .then(checkStatus)
    .then(parseJSON);
}
