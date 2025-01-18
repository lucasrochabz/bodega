import { useEffect, useState } from 'react';
import { useLoading } from '../../hooks';
import { BASE_API_URL } from '../../../config';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import './ProfilePage.css';

export const ProfilePage = () => {
  const [info, setInfo] = useState(null);

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
      setInfo(results.data);
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
      {loading || !info ? (
        <Loading />
      ) : (
        <section className="profile">
          <h2>Olá {info.name}, seja bem-vindo ao nosso site!</h2>
          <h2>Endereço</h2>
          <p>
            Você mora na {info.street}, número: {info.number}, no bairro{' '}
            {info.neighborhood}, na cidade {info.city}.
          </p>
        </section>
      )}
      <Footer />
    </>
  );
};
