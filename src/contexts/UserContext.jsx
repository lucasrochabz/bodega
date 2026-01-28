import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { useLoading } from '../hooks';
import { authService } from '../services/authService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { loading, startLoading, stopLoading } = useLoading();

  const [login, setLogin] = useState(() => {
    const token = localStorage.getItem('token');
    return token != null;
  });
  const [data, setData] = useState(null);

  // fix: add useCallback para deixar função mais pura
  const getUser = async (token) => {
    startLoading();
    try {
      const result = await authService.getMe(token);

      setData(result.data);
      setLogin(true);
    } catch (error) {
      userLogout();
      console.error(error.message);
      // fix: remover o alert para throw error;
      alert(error.message);
    } finally {
      stopLoading();
    }
  };

  const userLogin = async (email, password) => {
    startLoading();
    try {
      const result = await authService.login({ email, password });
      const { token } = result;

      localStorage.setItem('token', token);
      await getUser(token);
    } catch (error) {
      console.error(error.message);

      // fix: remover o alert para throw error;
      alert(error.message);
    } finally {
      stopLoading();
    }
  };

  const updateUser = async (body) => {
    const token = localStorage.getItem('token');
    startLoading();
    try {
      await authService.update(token, body);

      await getUser(token);
    } catch (error) {
      console.error(error.message);
      throw error;
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
      value={{
        userLogin,
        userLogout,
        updateUser,
        data,
        login,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
