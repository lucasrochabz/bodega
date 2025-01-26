import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useLoading } from '../../hooks';
import { BASE_API_URL } from '../../../config';
import { Loading } from '../../components/Loading';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Logout } from '../../components/Logout';
import { Footer } from '../../components/Footer';
import './MyAccountPage.css';

export const MyAccountPage = () => {
  const navigate = useNavigate();
  const { loading, startLoading, stopLoading } = useLoading();
  const [user, setUser] = useState(null);

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
      setUser(results.data);
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      alert(`Erro ao buscar detalhes do usuário: ${error.message}`);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    const userId = getLocalStorage();
    if (!userId) {
      return navigate('/login');
    }
    getUser(userId);
  }, []);

  return (
    <>
      <Head title="Minha conta" description="Descrição da página Minha Conta" />

      <Header />
      {loading || !user ? (
        <Loading />
      ) : (
        <main className="my-account-container">
          <Sidebar />
          <section>
            <Outlet />
          </section>
        </main>
      )}
      <Footer />
    </>
  );
};
