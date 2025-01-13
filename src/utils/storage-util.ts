import Cookies from "js-cookie";

export interface StorageOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
  useLocalStorage?: boolean;
}

const DEFAULT_OPTIONS: StorageOptions = {
  expires: 1,
  path: "/",
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  useLocalStorage: false,
};

export const storageUtils = {
  set: <T>(key: string, value: T, options: StorageOptions = {}): void => {
    const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
    const stringValue = JSON.stringify(value);

    if (mergedOptions.useLocalStorage) {
      setLocalStorageItem(key, stringValue);
    } else {
      Cookies.set(key, stringValue, mergedOptions);
    }
  },

  get: <T>(key: string, defaultValue: T | null = null): T | null => {
    let value: string | null | undefined;

    if (typeof window !== "undefined" && localStorage.getItem(key)) {
      value = getLocalStorageItem(key);
    } else {
      value = Cookies.get(key);
    }

    if (value === undefined || value === null) return defaultValue;
    try {
      return JSON.parse(value) as T;
    } catch {
      return value as unknown as T;
    }
  },

  remove: (key: string, options: StorageOptions = {}): void => {
    const mergedOptions = { ...DEFAULT_OPTIONS, ...options };

    if (mergedOptions.useLocalStorage) {
      removeLocalStorageItem(key);
    } else {
      Cookies.remove(key, mergedOptions);
    }
  },

  clear: (): void => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    Object.keys(Cookies.get()).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
  },
};

// Local Storage functions
export const setLocalStorageItem = (key: string, value: string): void => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error("Error setting localStorage item:", error);
    }
  }
};

export const getLocalStorageItem = (key: string): string | null => {
  if (typeof window !== "undefined") {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error("Error getting localStorage item:", error);
      return null;
    }
  }
  return null;
};

export const removeLocalStorageItem = (key: string): void => {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing localStorage item:", error);
    }
  }
};

export const isNetworkError = (error: unknown): boolean => {
  return (
    (error instanceof Error &&
      ("code" in error || "message" in error) &&
      (error as any).code === "ECONNABORTED") ||
    (error as any).message === "Network Error"
  );
};

export const retryFunction = (failureCount: number, error: Error) => {
  if (isNetworkError(error)) {
    return failureCount < 3;
  }
  return false;
};
