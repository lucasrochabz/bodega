import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './Header.css';

export const Header = () => {
  const { statusUser } = useContext(UserContext);

  return (
    <section className="header-bg">
      <div className="header">
        <Link to={'/'}>
          <h2 className="logo">Bodega</h2>
        </Link>
        <Link to={statusUser ? '/my-account' : '/login'} className="btn-header">
          {statusUser ? 'Olá, User' : 'Login'}
        </Link>
      </div>
    </section>
  );
};
