import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Head } from '../../components/common/Head';
import { Header } from '../../components/layout/Header';
import { Sidebar } from '../../components/layout/Sidebar';
import { MenuMobile } from '../../components/ui/MenuMobile';
import { Footer } from '../../components/layout/Footer';
import styles from './UserPage.module.css';

const UserPage = () => {
  const location = useLocation();
  const [title, setTitle] = useState('');

  useEffect(() => {
    const { pathname } = location;

    const routeTitles = {
      '/account/my-info': 'Minhas informações',
      '/account/orders': 'Meus pedidos',
    };

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

      <main className={styles.container}>
        <Sidebar />
        <article className={styles.wrapper}>
          <div className={styles.menuMobile}>
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

export default UserPage;
