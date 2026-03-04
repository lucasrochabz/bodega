import { useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValueState] = useState(() => {
    const value = localStorage.getItem(key);
    return value !== null ? value : defaultValue;
  });

  const setStoredValue = (value) => {
    setStoredValueState(value);

    if (value == null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value);
    }
  };

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
