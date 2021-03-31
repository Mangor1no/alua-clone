/* eslint-disable no-console */
import Axios from 'axios';
import { SERVERS } from 'constants/server';

const init = () => {
  console.log('Axios INIT');
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const auth = Axios.defaults.headers?.Authorization;
  if (auth) {
    headers.Authorization = auth;
    console.log('axios INIT with AUTH');
  }
  Axios.defaults.headers = headers;
};

const setBaseUrl = (baseUrl) => {
  let newBaseUrl;

  const isProduction = false;

  if (isProduction) {
    newBaseUrl = SERVERS.PRODUCTION;
  } else if (baseUrl) {
    newBaseUrl = baseUrl;
  } else {
    newBaseUrl = SERVERS.DEVELOPMENT;
  }

  Axios.defaults.baseURL = newBaseUrl;

  console.log('axios baseURL', newBaseUrl);

  return newBaseUrl;
};

const clearBaseUrl = () => {
  Axios.defaults.baseURL = '';
};

const setHeaderToken = (newToken, from) => {
  if (!Axios.defaults.headers) {
    console.log('axios headers empty');
    return;
  }

  if (!newToken) {
    console.log('axios headers token EMPTY', from);
    return;
  }

  const bearerToken = `Bearer ${newToken}`;
  const currentToken = Axios?.defaults?.headers?.Authorization || '';

  if (currentToken === bearerToken) {
    // console.warn('axios headers token SAME', from);
    return;
  }

  Axios.defaults.headers.Authorization = bearerToken;
};

const clearHeaderToken = () => {
  Axios.defaults.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
};

const AxiosSetup = {
  init,
  setBaseUrl,
  clearBaseUrl,
  setHeaderToken,
  clearHeaderToken,
};

export default AxiosSetup;
