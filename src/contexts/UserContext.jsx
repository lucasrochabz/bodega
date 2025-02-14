import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(localStorage.getItem('name') || '');

  const login = (data) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('name', data.name);
    setUserName(data.name);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    setUserName('');
  };

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userName, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
