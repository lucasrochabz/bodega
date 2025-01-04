import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedLogginStatus === 'true');
  }, []);

  const login = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const logout = (e) => {
    e.preventDefault();

    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  return { isLoggedIn, login, logout };
};
