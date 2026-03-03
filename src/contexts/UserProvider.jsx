import PropTypes from 'prop-types';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AuthContext } from './AuthContext';
import { UserContext } from './UserContext';
import { useLoading } from '@/hooks';
import { authService } from '@/services/authService';
import { usersService } from '@/services/usersService';

// fix: acho que tenho que add logout aqui
export const UserProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const { loading, startLoading, stopLoading } = useLoading();
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const getMe = useCallback(async () => {
    if (!token) return;
    startLoading();
    setError(null);

    try {
      const result = await authService.getMe(token);

      setData(result);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      setData(null);
    } finally {
      stopLoading();
    }
  }, [token, startLoading, stopLoading]);

  const update = useCallback(
    async (body) => {
      if (!token) return;

      startLoading();
      setError(null);

      try {
        await usersService.update(token, body);
        await getMe();
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        stopLoading();
      }
    },
    [token, startLoading, stopLoading, getMe],
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
