import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { useMedia } from '../../hooks';
import { ROUTES } from '../../routes/paths';
import { Button } from '../Button';
import styles from './MenuMobile.module.css';

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
        <button className={styles.btnMenuMobile} onClick={handleMobileMenu}>
          {mobileMenu ? 'Fechar' : 'Menu'}
        </button>
      )}

      {mobile && mobileMenu && (
        <nav aria-label="Menu principal">
          <ul className={styles.menuList}>
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.ACCOUNT_MY_INFO}>Minhas informações</Link>
            </li>
            <li>
              <Link to={ROUTES.ACCOUNT_ORDERS}>Meus pedidos</Link>
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
