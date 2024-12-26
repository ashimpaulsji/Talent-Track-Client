export const setLocalStorageItem = (key: string, value: string): void => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        console.error('Error setting localStorage item:', error);
      }
    }
  };
  
  export const getLocalStorageItem = (key: string): string | null => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        console.error('Error getting localStorage item:', error);
        return null;
      }
    }
    return null;
  };
  
  export const removeLocalStorageItem = (key: string): void => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error('Error removing localStorage item:', error);
      }
    }
  };
  
  export const isNetworkError = (error: unknown): boolean => {
    return (
      error instanceof Error &&
      ('code' in error || 'message' in error) &&
      (error as any).code === 'ECONNABORTED' ||
      (error as any).message === 'Network Error'
    );
  };
  
  export const retryFunction = (failureCount: number, error: Error) => {
    if (isNetworkError(error)) {
      return failureCount < 3;
    }
    return false;
  };