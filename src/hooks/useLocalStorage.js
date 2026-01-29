import { useEffect, useState } from 'react';

const useLocalStorage = (key, value) => {
  const [storedValue, setStoredValue] = useState(() => {
    const localStorageValue = localStorage.getItem(key);

    return localStorageValue ? localStorageValue : value;
  });

  useEffect(() => {
    localStorage.setItem(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
