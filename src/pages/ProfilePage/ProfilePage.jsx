import { useEffect, useState } from 'react';
import { useLoading } from '../../hooks';
import { BASE_API_URL } from '../../../config';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import './ProfilePage.css';

export const ProfilePage = () => {
  const [name, setName] = useState('');

  const { loading, startLoading, stopLoading } = useLoading();

  const getLocalStorage = () => {
    const userStorage = localStorage.getItem('user');
    return userStorage;
  };

  const getUser = async (userId) => {
    startLoading();
    try {
      const response = await fetch(`${BASE_API_URL}/users/${userId}`);

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      setName(results.data.name);
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      alert(`Erro ao buscar detalhes do usuário: ${error.message}`);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    const userId = getLocalStorage();
    getUser(userId);
  }, []);

  return (
    <>
      <Header />
      {loading || !name ? (
        <Loading />
      ) : (
        <section className="profile">
          <h2>Olá {name}, seja bem-vindo ao nosso site!</h2>
        </section>
      )}
      <Footer />
    </>
  );
};
