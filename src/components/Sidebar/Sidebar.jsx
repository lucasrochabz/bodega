import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { ROUTES } from '../../routes/paths';
import { Button } from '../Button';
import './Sidebar.css';

const Sidebar = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate(ROUTES.LOGIN);
  };

  return (
    <aside className="sidebar">
      <nav aria-label="Menu lateral">
        <ul className="sidebar-list">
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
