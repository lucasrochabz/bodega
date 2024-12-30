import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './Header.css';

export const Header = () => {
  const { isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <section className="header-bg">
      <div className="header">
        <Link to={'/'}>
          <h2 className="logo">Bodega</h2>
        </Link>
        <Link to={'/login'} className="btn-login">
          Login
        </Link>
        <button onClick={isLoggedIn ? logout : login}>
          {isLoggedIn ? 'Sair' : 'Entrar'}
        </button>
      </div>
    </section>
  );
};
