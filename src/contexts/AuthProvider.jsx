import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoading, useLocalStorage } from '../hooks';
import { authService } from '../services/authService';
import { usersService } from '../services/usersService';
import { AuthContext } from './AuthContext';

// fix: dividir contexts
// fix: add refresh token
export const AuthProvider = ({ children }) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [token, setToken] = useLocalStorage('token', null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const isAuthenticated = !!token;

  const clearError = () => setError(null);

  // fix: add useCallback para deixar função mais pura
  const getMe = async () => {
    startLoading();
    setError(null);

    try {
      const result = await authService.getMe();

      setData(result);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      logout();
    } finally {
      stopLoading();
    }
  };

  // fix: add useCallback
  const login = async (email, password) => {
    startLoading();
    setError(null);

    try {
      const result = await authService.login({ email, password });

      setToken(result);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      stopLoading();
    }
  };

  // fix: add useCallback
  const update = async (body) => {
    if (!token) return;

    startLoading();
    setError(null);

    try {
      await usersService.update(body);

      await getMe();
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      stopLoading();
    }
  };

  // fix: add useCallback
  const logout = () => {
    setToken(null);
    setData(null);
    setError(null);
  };

  useEffect(() => {
    if (token) {
      getMe();
    }
    // para colocar o getUser como dependência tenho que colocar o useCallback nele
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // fix: saber porque devo usar useMemo no value
  const value = {
    login,
    logout,
    update,
    isAuthenticated,
    loading,
    error,
    clearError,
    data,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
