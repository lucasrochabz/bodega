import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './Header.css';

export const Header = () => {
  const { userName } = useContext(UserContext);

  return (
    <header className="header-bg">
      <nav className="header">
        <Link to={'/'} aria-label="Bodega - Home">
          <span className="logo">Bodega</span>
        </Link>
        <Link to={userName ? '/account' : '/login'} className="btn-header">
          {userName ? `Olá, ${userName}` : 'Entre ou cadastre-se'}
        </Link>
      </nav>
    </header>
  );
};
