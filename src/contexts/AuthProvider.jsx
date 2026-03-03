import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';
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

  const clearError = useCallback(() => {
    setError(null);
  }, [setError]);

  const getMe = useCallback(async () => {
    startLoading();
    setError(null);

    try {
      const result = await authService.getMe();

      setData(result);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      setToken(null);
      setData(null);
    } finally {
      stopLoading();
    }
  }, [startLoading, stopLoading, setToken, setError, setData]);

  const login = useCallback(
    async (email, password) => {
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
    },
    [startLoading, stopLoading, setToken, setError],
  );

  const update = useCallback(
    async (body) => {
      // fix: acho que tenho que remover isso
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
    },
    [startLoading, stopLoading, token, getMe],
  );

  const logout = useCallback(() => {
    setToken(null);
    setData(null);
    setError(null);
  }, [setToken]);

  useEffect(() => {
    if (token) {
      getMe();
    }
  }, [token, getMe]);

  const value = useMemo(
    () => ({
      login,
      logout,
      update,
      isAuthenticated,
      loading,
      error,
      clearError,
      data,
    }),
    [login, logout, update, isAuthenticated, loading, error, clearError, data],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
