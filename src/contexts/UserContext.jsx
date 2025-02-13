import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [statusUser, setStatusUser] = useLocalStorage('statusUser', false);

  const login = (data) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('name', data.name);
    setStatusUser(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    setStatusUser(false);
  };

  return (
    <UserContext.Provider value={{ statusUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
