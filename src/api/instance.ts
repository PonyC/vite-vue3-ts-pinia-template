import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const instance = axios.create();

// Request interceptors
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// Response interceptors
instance.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
  },
  (error: any) => {
    // do something
    return Promise.reject(error);
  },
);

/* 对response进行统一的处理 */
const handleResponse = ({
  config,
  response,
}: {
  config: AxiosRequestConfig;
  response: AxiosResponse;
}) => {
  console.log('handleResponse====>', config, response);
  // do something
};

const request = (config: AxiosRequestConfig) => {
  const url = config.url;
  const method = (config.method || 'get').toLowerCase();
  let params = config.params || {};

  if (config.method && ['get', 'delete'].includes(config.method) && params) {
    params = { params };
  }

  return instance({ url, method, ...params })
    .then((response: AxiosResponse) => {
      return Promise.resolve({ config, response });
    })
    .then(handleResponse)
    .catch((error: any) => {
      return Promise.reject(error);
    });
};

export default request;
