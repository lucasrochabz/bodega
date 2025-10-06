import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { useMedia } from '../../hooks';
import { ROUTES } from '../../routes/paths';
import { Button } from '../Button';
import './MenuMobile.css';

const MenuMobile = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 800px)');

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  const handleLogout = () => {
    userLogout();
    navigate(ROUTES.LOGIN);
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
          <Link to={ROUTES.HOME}>Home</Link>
          <Link to={ROUTES.ACCOUNT_MY_INFO}>Minhas informações</Link>
          <Link to={ROUTES.ACCOUNT_ORDERS}>Meus pedidos</Link>
          <Button type="logout" onClick={handleLogout}>
            Sair
          </Button>
        </nav>
      )}
    </>
  );
};

export default MenuMobile;
