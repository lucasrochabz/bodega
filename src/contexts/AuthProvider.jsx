import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { useLoading, useLocalStorage } from '@/hooks/shared';
import { setHandler } from '@/services/http/request';
import { authService } from '../services/auth.service';
import { AuthContext } from './AuthContext';

// fix: dividir contexts
// fix: add refresh token
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage(STORAGE_KEYS.AUTH_TOKEN, null);
  const isAuthenticated = !!token;

  const { isLoading, startLoading, stopLoading } = useLoading();
  const [error, setError] = useState(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const login = useCallback(
    async (payload) => {
      startLoading();
      setError(null);

      try {
        const result = await authService.login(payload);

        setToken(result);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        stopLoading();
      }
    },
    [startLoading, stopLoading, setToken],
  );

  const logout = useCallback(() => {
    setToken(null);
    setError(null);
  }, [setToken]);

  useEffect(() => {
    setHandler(() => {
      logout();
    });
  }, [logout]);

  const value = useMemo(
    () => ({
      token,
      isAuthenticated,
      login,
      logout,
      isLoading,
      error,
      clearError,
    }),
    [token, isAuthenticated, login, logout, isLoading, error, clearError],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
