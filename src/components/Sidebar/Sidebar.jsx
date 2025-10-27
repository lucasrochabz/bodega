import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { ROUTES } from '../../routes/paths';
import { Button } from '../Button';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate(ROUTES.LOGIN);
  };

  return (
    <aside className={styles.sidebar}>
      <nav aria-label="Menu lateral">
        <ul className={styles.sidebarList}>
          <li>
            <NavLink to={ROUTES.ACCOUNT_MY_INFO}>Minhas informações</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ACCOUNT_ORDERS} end>
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
