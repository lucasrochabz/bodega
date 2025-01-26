import { Link } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li>
          <Link to={'/orders/1'}>Meus Pedidos</Link>
        </li>
        <li>Meus Dados</li>
        <li>Sair</li>
      </ul>
    </aside>
  );
};
