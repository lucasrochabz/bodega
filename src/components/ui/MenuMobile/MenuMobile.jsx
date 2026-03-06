import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { useMedia } from '../../../hooks/shared';
import { ROUTES } from '../../../paths';
import { Button } from '../Button';
import styles from './MenuMobile.module.css';

const MenuMobile = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 800px)');

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  const handleLogout = () => {
    logout();
    navigate(ROUTES.auth.login);
  };

  return (
    <>
      {mobile && (
        <button className={styles.btnMenuMobile} onClick={handleMobileMenu}>
          {mobileMenu ? 'Fechar' : 'Menu'}
        </button>
      )}

      {mobile && mobileMenu && (
        <nav aria-label="Menu principal">
          <ul className={styles.menuList}>
            <li>
              <Link to={ROUTES.home}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.account.myInfo}>Minhas informações</Link>
            </li>
            <li>
              <Link to={ROUTES.account.orders}>Meus pedidos</Link>
            </li>
            <li>
              <Button variant="logout" onClick={handleLogout}>
                Sair
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default MenuMobile;
