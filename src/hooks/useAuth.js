import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [statusUser, setStatusUser] = useState(() => {
    const statusStoraged = localStorage.getItem('statusUser');
    return statusStoraged === 'true';
  });

  useEffect(() => {
    console.log(statusUser ? 'usuário logado' : 'usuário não está logado');
  }, [statusUser]);

  const login = (token) => {
    localStorage.setItem('statusUser', 'true');
    localStorage.setItem('token', token);
    setStatusUser(true);
  };

  const logout = () => {
    localStorage.removeItem('statusUser');
    localStorage.removeItem('token');
    setStatusUser(false);
  };

  return { statusUser, login, logout };
};
