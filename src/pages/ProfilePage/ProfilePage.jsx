import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const ProfilePage = () => {
  const [name, setName] = useState('');

  const getLocalStorage = () => {
    const userStorage = localStorage.getItem('user');
    return userStorage;
  };

  const getUser = async (userId) => {
    const response = await fetch(`http://localhost:4000/users/${userId}`);

    const results = await response.json();
    setName(results.data.name);
  };

  useEffect(() => {
    const userId = getLocalStorage();
    getUser(userId);
  }, []);

  return (
    <>
      <Header />
      <h2>Olá {name}, seja bem-vindo!</h2>
      <Footer />
    </>
  );
};
