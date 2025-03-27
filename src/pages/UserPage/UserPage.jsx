import { Outlet } from 'react-router-dom';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Footer } from '../../components/Footer';
import './UserPage.css';

export const UserPage = () => {
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
