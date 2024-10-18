import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <section className="header-bg">
      <div className="header">
        <Link to={'/'}>
          <h2 className="logo">Bodega</h2>
        </Link>
        <Link to={'/login'} className="btn-login">
          Login
        </Link>
      </div>
    </section>
  );
};
