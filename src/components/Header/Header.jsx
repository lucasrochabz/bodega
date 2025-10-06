import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { ROUTES } from '../../routes/paths';
import './Header.css';

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className="header-bg">
      <nav className="header">
        <Link to={ROUTES.HOME} aria-label="Bodega - Home">
          <span className="logo">Bodega</span>
        </Link>
        <Link to={data ? ROUTES.ACCOUNT : ROUTES.LOGIN} className="btn-header">
          {data ? `Olá, ${data.first_name}` : 'Entre ou cadastre-se'}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
