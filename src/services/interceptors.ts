import axios from 'axios';

const api = axios.create();

const url = process.env.REACT_APP_BASE_URL;

api.interceptors.request.use(
  (config) => {
    config.url = url ? url + config.url : config.url;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
