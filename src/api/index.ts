import axios, { AxiosResponse } from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

console.log(baseURL);

export const instance = axios.create({
  baseURL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

interface RequestParams {
  params?: object;
  headers?: object;
}

interface ApiRequestParams extends RequestParams {
  data: object;
}

export const getRequest = async <T>(url: string, reqParams?: RequestParams): Promise<AxiosResponse<T>> => {
  const { params, headers } = reqParams ?? {};

  const config = { url, params, headers };

  const res = await instance.get(url, config);

  return res;
};

export const postRequest = async <T>(url: string, reqParams?: ApiRequestParams): Promise<AxiosResponse<T>> => {
  const { data = {}, headers = {}, params = {} } = reqParams ?? {};

  const config = { headers, params };

  const res = await instance.post(url, data, config);

  return res;
};

export const patchRequest = async <T>(url: string, reqParams?: ApiRequestParams): Promise<AxiosResponse<T>> => {
  const { data = {}, headers = {}, params = {} } = reqParams ?? {};

  const config = { headers, params };

  const res = await instance.patch(url, data, config);

  return res;
};

export const deleteRequest = async (url: string, reqParams?: ApiRequestParams) => {
  const { headers = {}, params = {} } = reqParams ?? {};

  const config = { headers, params };

  await instance.delete(url, config);
};
