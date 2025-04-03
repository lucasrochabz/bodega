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

  useEffect(() => {
    const { pathname } = location;

    if (pathname.startsWith('/account/orders/details/')) {
      setTitle('Detalhes do pedido');
    } else {
      switch (pathname) {
        case '/account/my-info':
          setTitle('Minhas informações');
          break;
        case '/account/orders':
          setTitle('Meus pedidos');
          break;
        default:
          setTitle('Minha Conta');
      }
    }
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
