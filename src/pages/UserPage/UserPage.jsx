import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Footer } from '../../components/Footer';
import './UserPage.css';

export const UserPage = () => {
  const { userName } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName) {
      navigate('/login');
    }
  }, []);

  if (!userName) return null;
  return (
    <>
      <Head title="Minha conta" description="Descrição da página Minha Conta" />
      <Header />

      <main className="user-page">
        <Sidebar />
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
