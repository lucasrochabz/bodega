import { createContext, useEffect, useState } from 'react';
import { GET_USER } from '../api/users';
import { POST_LOGIN } from '../api/auth';
import { useLoading } from '../hooks';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [login, setLogin] = useState(() => {
    const token = localStorage.getItem('token');
    return token != null;
  });
  const [data, setData] = useState(null);

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
      setData(results.data[0]);
      setLogin(true);
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error.message);
      alert(`Erro ao buscar dados do usuário: ${error.message}`);
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
      await getUser(token);
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      alert(`Erro ao fazer login: ${error.message}`);
    } finally {
      stopLoading();
    }
  };

  const userLogout = () => {
    setLogin(false);
    setData(null);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        startLoading();
        try {
          const { url, options } = GET_USER(token);
          const response = await fetch(url, options);
          const results = await response.json();

          if (!results.success) {
            userLogout();
            throw new Error(results.message);
          }

          await getUser(token);
        } catch (error) {
          console.error('Erro na requisição:', error.message);
          alert(`Erro na requisição: ${error.message}`);
        } finally {
          stopLoading();
        }
      }
    };
    autoLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, login, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
