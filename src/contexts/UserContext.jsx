import { createContext } from 'react';
import { useAuth } from '../hooks';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const auth = useAuth();

  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};
