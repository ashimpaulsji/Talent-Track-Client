import { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem  } from '../utils/localstoreg-utils';
import { publicApi } from './api-client';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export const setTokens = (accessToken: string, refreshToken: string): void => {
  setLocalStorageItem(ACCESS_TOKEN_KEY, accessToken);
  setLocalStorageItem(REFRESH_TOKEN_KEY, refreshToken);
};

export const getAccessToken = (): string | null => {
  return getLocalStorageItem(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = (): string | null => {
  return getLocalStorageItem(REFRESH_TOKEN_KEY);
};

export const clearTokens = (): void => {
  removeLocalStorageItem(ACCESS_TOKEN_KEY);
  removeLocalStorageItem(REFRESH_TOKEN_KEY);
};

export const refreshAccessToken = async (): Promise<string> => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  try {
    const response = await publicApi.post('/auth/refresh-token', { refreshToken });
    const { accessToken, newRefreshToken } = response.data;
    setTokens(accessToken, newRefreshToken || refreshToken);
    return accessToken;
  } catch {
    clearTokens();
    throw new Error('Failed to refresh token');
  }
};