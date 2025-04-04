import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { useMedia } from '../../hooks';
import { Button } from '../Button';
import './MenuMobile.css';

export const MenuMobile = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 800px)');

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  const handleLogout = () => {
    userLogout();
    navigate('/login');
  };

  return (
    <>
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
    </>
  );
};
