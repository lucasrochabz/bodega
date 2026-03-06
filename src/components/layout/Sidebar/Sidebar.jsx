import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../paths';
import { AuthContext } from '../../../contexts/AuthContext';
import { Button } from '../../ui/Button';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.auth.login);
  };

  return (
    <aside className={styles.sidebar}>
      <nav aria-label="Menu lateral">
        <ul className={styles.sidebarList}>
          <li>
            <NavLink to={ROUTES.account.myInfo}>Minhas informações</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.account.orders} end>
              Meus Pedidos
            </NavLink>
          </li>
          <li>
            <Button variant="logout" onClick={handleLogout}>
              Sair
            </Button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
