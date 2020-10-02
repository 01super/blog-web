import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'antd';

// 接口前缀
const BASE_URL = '';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 30000
});

// 添加一个请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在请求发出之前进行一些操作
    // config.headers.wangsheng = 'headers';
    return config;
  },
  function (err) {
    // Do something with request error
    return Promise.reject(err);
  }
);
// 添加一个响应拦截器
instance.interceptors.response.use(
  ({ data: result }) => result,
  function (err) {
    //  当出现错误时的回调函数。
    // Do something with response error
    //  统一处理 错误信息处
    Promise.reject(err).catch(function (error) {
      // 请求已经发出，但是服务器响应返回的状态吗不在2xx的范围内
      if (error.response) {
        if (error.response.status === 400) {
          if (error.response.data === 'already logged in') {
            window.location.href = '/';
            return;
          }
          message.error(
            `Request failed with status code 400 ${error.data ? `: ${error.data}` : ''}`
          );
          return;
        }
        if (error.response.status === 401) {
          window.location.href = '/login';
          return;
        }
        if (error.response.status === 404) {
          message.error(`404 not fond: ${error.response.request.responseURL}`);
          return;
        }
        message.error(error.message);
      } else {
        // 一些错误是在设置请求的时候触发
        message.error('Error', error.message);
      }
    });
    //  返回错误信息！
    return Promise.reject(err);
  }
);

export function get<T>(
  url: string,
  params?: { [key: string]: any },
  config?: AxiosRequestConfig
): Promise<T> {
  return instance.get(url, { params, ...config }).then();
}

export function post<T>(
  url: string,
  data?: { [key: string]: any },
  config?: AxiosRequestConfig
): Promise<T> {
  return instance.post(url, data, config).then();
}

export function det<T>(
  url: string,
  data?: { [key: string]: any },
  config?: AxiosRequestConfig
): Promise<T> {
  return instance.delete(url, { data, ...config }).then();
}

export function put<T>(
  url: string,
  data?: { [key: string]: any },
  config?: AxiosRequestConfig
): Promise<T> {
  return instance.put(url, data, { ...config }).then();
}

export default {
  get,
  post,
  det,
  put
};
