import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Button } from '../Button';
import './Sidebar.css';

export const Sidebar = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate('/login');
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavLink to={'/account/my-info'}>Minhas informações</NavLink>
        <NavLink to={'/account/orders'} end>
          Meus Pedidos
        </NavLink>
        <Button type="logout" onClick={handleLogout}>
          Sair
        </Button>
      </nav>
    </aside>
  );
};
