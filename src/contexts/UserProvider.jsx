import PropTypes from 'prop-types';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { authService } from '@/services/auth.service';
import { usersService } from '@/services/users.service';
import { AuthContext } from './AuthContext';
import { UserContext } from './UserContext';

// fix: acho que tenho que add logout aqui
export const UserProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState({
    getMe: false,
    update: false,
  });
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const setLoadingKey = useCallback((key, value) => {
    setIsLoading((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const getMe = useCallback(async () => {
    setLoadingKey('getMe', true);
    setError(null);

    try {
      const result = await authService.getMe();

      setData(result);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      setData(null);
    } finally {
      setLoadingKey('getMe', false);
    }
  }, [setLoadingKey]);

  const update = useCallback(
    async (body) => {
      setLoadingKey('update', true);
      setError(null);

      try {
        await usersService.update(body);
        await getMe();
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoadingKey('update', false);
      }
    },
    [setLoadingKey, getMe],
  );

  useEffect(() => {
    if (!token) {
      setData(null);
      return;
    }
    getMe();
  }, [token, getMe]);

  const value = useMemo(
    () => ({
      isLoading,
      error,
      clearError,
      data,
      getMe,
      update,
    }),
    [isLoading, error, clearError, data, getMe, update],
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
