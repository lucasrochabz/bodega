import { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { useMedia } from '../../hooks';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import './UserPage.css';

export const UserPage = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const mobile = useMedia('(max-width: 800px)');
  const [title, setTitle] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  const handleLogout = () => {
    userLogout();
    navigate('/login');
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
          <div className="menu-mobile">
            <h1>{title}</h1>
            {mobile && (
              <button className="btn-menu-mobile" onClick={handleMobileMenu}>
                {mobileMenu ? 'Fechar' : 'Menu'}
              </button>
            )}

            {mobile && mobileMenu && (
              <nav className="nav-menu">
                <Link to="/">Home</Link>
                <Link to={'/account/my-info'}>Minhas informações</Link>
                <Link to={'/account/orders'}>Meus pedidos</Link>
                <Button type="logout" onClick={handleLogout}>
                  Sair
                </Button>
              </nav>
            )}
          </div>
          <Outlet />
        </article>
      </main>

      <Footer />
    </>
  );
};
