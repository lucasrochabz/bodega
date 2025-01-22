import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [statusUser, setStatusUser] = useState(false);

  const getLocalStorage = () => {
    const statusStoraged = localStorage.getItem('statusUser');
    if (statusStoraged === null) {
      setStatusUser(false);
    } else {
      setStatusUser(statusStoraged === 'true');
    }
  };

  // fix: corrigir retornos
  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    if (statusUser) {
      console.log('usuário logado');
    } else {
      console.log('usuário não está logado');
    }
  }, [statusUser]);

  const login = (e) => {
    e.preventDefault();

    setStatusUser(true);
    localStorage.setItem('statusUser', 'true');
  };

  const logout = (e) => {
    e.preventDefault();

    setStatusUser(false);
    localStorage.setItem('statusUser', 'false');
  };

  return { statusUser, login, logout };
};
