import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {DEV_API, PROD_API} from '@env';

import {PathToResponse} from './pathToResponse.api';

const instance: AxiosInstance = axios.create({
  baseURL: __DEV__ ? DEV_API : PROD_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// MARK: - interceptor
instance.interceptors.request.use(async (request) => {
  const token = await AsyncStorage.getItem('@token');
  if (token && request.headers) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

// MARK: - getParsedUrl
const getParsedUrl = (
  url: string,
  params?: {[key: string]: number | string},
) => {
  if (!params) {
    return url;
  }

  let urlString = '';
  Object.keys(params).forEach((key, index, array) => {
    urlString += `${index === 0 ? '?' : ''}${key}=${params[key]}${
      index !== array.length - 1 ? '&' : ''
    }`;
  });

  return url + urlString;
};

// MARK: - getInstance
const getInstance =
  (method: 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH') =>
  <TPath extends keyof PathToResponse>(
    url: TPath,
    params?: PathToResponse[TPath]['params'],
    data?: PathToResponse[TPath]['body'],
    config?: Omit<
      AxiosRequestConfig<any>,
      'baseURL' | 'url' | 'method' | 'data'
    >,
  ): Promise<AxiosResponse<PathToResponse[TPath]['response']>> =>
    instance({url: getParsedUrl(url, params), method, data, ...config});

const api = {
  get: getInstance('GET'),
  delete: getInstance('DELETE'),
  head: getInstance('HEAD'),
  options: getInstance('OPTIONS'),
  post: getInstance('POST'),
  put: getInstance('PUT'),
  patch: getInstance('PATCH'),
};

export {instance, api};
