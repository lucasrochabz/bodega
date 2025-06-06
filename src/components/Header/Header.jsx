import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './Header.css';

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className="header-bg">
      <nav className="header">
        <Link to={'/'} aria-label="Bodega - Home">
          <span className="logo">Bodega</span>
        </Link>
        <Link to={data ? '/account' : '/login'} className="btn-header">
          {data ? `Olá, ${data.first_name}` : 'Entre ou cadastre-se'}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
