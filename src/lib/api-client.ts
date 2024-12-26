import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getAccessToken, refreshAccessToken, clearTokens } from './auth';
import { envConfig } from '../config/env-config';

const API_BASE_URL = envConfig.API_BASE_URL;

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  });
};

export const publicApi = createAxiosInstance(API_BASE_URL);
export const secureApi = createAxiosInstance(API_BASE_URL);

secureApi.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await getAccessToken();
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

secureApi.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await refreshAccessToken();
        if (newToken && originalRequest.headers) {
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
          return secureApi(originalRequest);
        }
      } catch (refreshError) {
        clearTokens();
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export const handleApiError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const serverError = error.response?.data;
    if (serverError && typeof serverError === 'object' && 'message' in serverError) {
      throw new Error(serverError.message as string);
    }
    throw new Error(error.message || 'An unexpected error occurred');
  }
  throw error;
};