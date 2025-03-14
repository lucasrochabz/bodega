import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './Header.css';

export const Header = () => {
  const { data, login } = useContext(UserContext);

  return (
    <header className="header-bg">
      <nav className="header">
        <Link to={'/'} aria-label="Bodega - Home">
          <span className="logo">Bodega</span>
        </Link>
        <Link to={login ? '/account' : '/login'} className="btn-header">
          {login
            ? `Olá, ${data ? data.name : 'Usuário'}`
            : 'Entre ou cadastre-se'}
        </Link>
      </nav>
    </header>
  );
};
