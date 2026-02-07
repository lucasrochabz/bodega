import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { useLoading, useLocalStorage } from '../hooks';
import { authService } from '../services/authService';

// fix: mudar para AuthContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [token, setToken] = useLocalStorage('token', null);

  const [data, setData] = useState(null);
  // fix: trocar para isAuthenticated
  const login = !!token;

  // fix: add useCallback para deixar função mais pura
  const getUser = async (authToken) => {
    startLoading();
    try {
      const result = await authService.getMe(authToken);

      setData(result.data);
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

      setToken(result.token);
      await getUser(result.token);
    } catch (error) {
      console.error(error.message);

      // fix: remover o alert para throw error;
      alert(error.message);
    } finally {
      stopLoading();
    }
  };

  const updateUser = async (body) => {
    if (!token) return;

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
    setToken(null);
    setData(null);
  };

  useEffect(() => {
    if (token) {
      getUser(token);
    }
    // para colocar o getUser como dependência tenho que colocar o useCallback nele
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <UserContext.Provider
      // fix: saber porque devo usar useMemo no value
      value={{ userLogin, userLogout, updateUser, loading, login, data }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
