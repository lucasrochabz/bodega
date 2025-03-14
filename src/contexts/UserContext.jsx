import { createContext, useEffect, useState } from 'react';
import { GET_USER, POST_LOGIN } from '../utils/apiUtils';
import { useLoading } from '../hooks/useLoading';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [login, setLogin] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? true : false;
  });

  const getUser = async (token) => {
    startLoading();
    try {
      const { url, options } = GET_USER(token);
      const response = await fetch(url, options);

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      setData(results.data);
      setLogin(true);
    } catch {
      console.error('Erro ao buscas dados do usuário:', error.message);
      alert(`Erro ao buscas dados do usuário: ${error.message}`);
    } finally {
      stopLoading();
    }
  };

  const userLogin = async (email, password) => {
    startLoading();
    try {
      const { url, options } = POST_LOGIN({ email, password });
      const response = await fetch(url, options);

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const { token } = await response.json();
      localStorage.setItem('token', token);
      getUser(token);
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      alert(`Erro ao fazer login: ${error.message}`);
    } finally {
      stopLoading();
    }
  };

  const userLogout = () => {
    localStorage.removeItem('token');
    setLogin(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, login, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
