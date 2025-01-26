import { Link } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <a href="#">Meus Dados</a>
        <Link to={'/my-account/orders/1'}>Meus Pedidos</Link>
        <a href="#">Sair</a>
      </nav>
    </aside>
  );
};
