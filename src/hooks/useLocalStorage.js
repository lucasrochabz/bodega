import { useEffect, useState } from 'react';

export const useLocalStorage = (storageKey, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const localStorageValue = localStorage.getItem(storageKey);

    return localStorageValue ? localStorageValue : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, storedValue);
  }, [storageKey, storedValue]);

  return [storedValue, setStoredValue];
};
