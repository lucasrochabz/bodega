import { useEffect, useState } from 'react';

export const useLocalStorage = (storageKey, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const localStorageValue = window.localStorage.getItem(storageKey);

    return localStorageValue ? localStorageValue : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, storedValue);
  }, [storageKey, storedValue]);

  return [storedValue, setStoredValue];
};
