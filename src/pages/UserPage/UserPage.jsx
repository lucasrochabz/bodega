import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Footer } from '../../components/Footer';
import { MenuMobile } from '../../components/MenuMobile';
import './UserPage.css';

export const UserPage = () => {
  const location = useLocation();
  const [title, setTitle] = useState('');

  const routeTitles = {
    '/account/my-info': 'Minhas informações',
    '/account/orders': 'Meus pedidos',
  };

  useEffect(() => {
    const { pathname } = location;

    setTitle(
      pathname.startsWith('/account/orders/details/')
        ? 'Detalhes do pedido'
        : routeTitles[pathname] || 'Minha conta',
    );
  }, [location]);

  return (
    <>
      <Head title="Minha conta" description="Descrição da página Minha Conta" />
      <Header />

      <main className="user-page-layout">
        <Sidebar />
        <article className="user-page">
          <div className="menu-mobile">
            <h1>{title}</h1>
            <MenuMobile />
          </div>
          <Outlet />
        </article>
      </main>

      <Footer />
    </>
  );
};
