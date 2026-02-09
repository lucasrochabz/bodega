import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { useLoading, useLocalStorage } from '../hooks';
import { authService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [token, setToken] = useLocalStorage('token', null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const isAuthenticated = !!token;

  const clearError = () => setError(null);

  // fix: add useCallback para deixar função mais pura
  const getMe = async (authToken) => {
    startLoading();
    setError(null);

    try {
      const result = await authService.getMe(authToken);

      setData(result.data);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      logout();
    } finally {
      stopLoading();
    }
  };

  const login = async (email, password) => {
    startLoading();
    setError(null);

    try {
      const result = await authService.login({ email, password });

      setToken(result.token);
      await getMe(result.token);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      stopLoading();
    }
  };

  const update = async (body) => {
    if (!token) return;

    startLoading();
    setError(null);

    try {
      await authService.update(token, body);

      await getMe(token);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      stopLoading();
    }
  };

  const logout = () => {
    setToken(null);
    setData(null);
    setError(null);
  };

  useEffect(() => {
    if (token) {
      getMe(token);
    }
    // para colocar o getUser como dependência tenho que colocar o useCallback nele
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <AuthContext.Provider
      // fix: saber porque devo usar useMemo no value
      value={{
        login,
        logout,
        update,
        isAuthenticated,
        loading,
        error,
        clearError,
        data,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
