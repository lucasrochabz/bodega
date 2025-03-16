import { NavLink } from 'react-router-dom';
import { Logout } from '../Logout';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavLink to={'/account/my-info'}>Minhas informações</NavLink>
        <NavLink to={'/account/orders'}>Meus Pedidos</NavLink>
        <Logout />
      </nav>
    </aside>
  );
};
