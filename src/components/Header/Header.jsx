import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './Header.css';

export const Header = () => {
  const { userName } = useContext(UserContext);

  return (
    <section className="header-bg">
      <div className="header">
        <Link to={'/'}>
          <h2 className="logo">Bodega</h2>
        </Link>
        <Link to={userName ? '/my-account' : '/login'} className="btn-header">
          {userName ? `Olá, ${userName}` : 'Login'}
        </Link>
      </div>
    </section>
  );
};
