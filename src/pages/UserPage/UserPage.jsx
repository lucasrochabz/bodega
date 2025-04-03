import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useMedia } from '../../hooks';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import './UserPage.css';

export const UserPage = () => {
  const location = useLocation();
  const mobile = useMedia('(max-width: 800px)');

  const [title, setTitle] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    console.log('clicou no menu');
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

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
          <section className="teste-container">
            <h1>{title}</h1>
            {mobile && (
              <button className="btn-menu-mobile" onClick={handleMobileMenu}>
                Menu
              </button>
            )}

            {mobile && mobileMenu && (
              <nav className="nav-teste">
                <Link to="/">Home</Link>
                <Button type="primary">
                  {mobile ? 'Button 1' : 'Teste 1'}
                </Button>
                <Button type="primary">
                  {mobile ? 'Button 2' : 'Teste 2'}
                </Button>
                <Button type="primary">
                  {mobile ? 'Button 3' : 'Teste 3'}
                </Button>
              </nav>
            )}
          </section>
          <Outlet />
        </article>
      </main>

      <Footer />
    </>
  );
};
