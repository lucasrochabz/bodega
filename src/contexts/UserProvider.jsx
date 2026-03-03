import PropTypes from 'prop-types';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { authService } from '@/services/authService';
import { usersService } from '@/services/usersService';
import { AuthContext } from './AuthContext';
import { UserContext } from './UserContext';

// fix: acho que tenho que add logout aqui
export const UserProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const [loading, setLoading] = useState({
    getMe: false,
    update: false,
  });
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const setLoadingKey = useCallback((key, value) => {
    setLoading((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const getMe = useCallback(async () => {
    if (!token) return;

    setLoadingKey('getMe', true);
    setError(null);

    try {
      const result = await authService.getMe(token);

      setData(result);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      setData(null);
    } finally {
      setLoadingKey('getMe', false);
    }
  }, [token, setLoadingKey]);

  const update = useCallback(
    async (body) => {
      if (!token) return;

      setLoadingKey('update', true);
      setError(null);

      try {
        await usersService.update(token, body);
        await getMe();
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoadingKey('update', false);
      }
    },
    [token, setLoadingKey, getMe],
  );

  useEffect(() => {
    if (token) {
      getMe();
    } else {
      setData(null);
    }
  }, [token, getMe]);

  const value = useMemo(
    () => ({
      loading,
      error,
      clearError,
      data,
      getMe,
      update,
    }),
    [loading, error, clearError, data, getMe, update],
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
