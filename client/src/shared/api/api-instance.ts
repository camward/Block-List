import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BASE_SERVER_URL } from '@/shared/constants/config';

export const apiInstance = axios.create({
  baseURL: BASE_SERVER_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return apiInstance({
    ...config,
    ...options,
  }).then((r) => r.data);
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
