import { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const localStorageValue = localStorage.getItem(key);

    return localStorageValue !== null ? localStorageValue : defaultValue;
  });

  useEffect(() => {
    if (storedValue == null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, storedValue);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
