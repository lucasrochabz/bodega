import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { useFetch, useLoading } from '../hooks';
import { GET_USER } from '../api/users';
import { authService } from '../services/authService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const { request } = useFetch();

  const [login, setLogin] = useState(() => {
    const token = localStorage.getItem('token');
    return token != null;
  });
  const [data, setData] = useState(null);

  // fix: add useCallback para deixar função mais pura
  const getUser = async (token) => {
    startLoading();
    try {
      const { url, options } = GET_USER(token);
      const response = await fetch(url, options);
      const results = await response.json();

      if (!response.ok) {
        userLogout();
        throw new Error(results.message);
      }

      setData(results.data);
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
      const result = await authService.login(request, { email, password });
      const { token } = result;

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
    const token = localStorage.getItem('token');

    if (token) {
      getUser(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, login, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
