import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Footer } from '../../components/Footer';
import './MyAccountPage.css';

export const MyAccountPage = () => {
  const navigate = useNavigate();

  const getLocalStorage = () => {
    const userStorage = localStorage.getItem('user');
    return userStorage;
  };

  useEffect(() => {
    const userId = getLocalStorage();
    if (!userId) {
      return navigate('/login');
    }
  }, []);

  return (
    <>
      <Head title="Minha conta" description="Descrição da página Minha Conta" />
      <Header />

      <main className="my-account-container">
        <Sidebar />
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
