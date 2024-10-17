import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const handleClick = () => {
    console.log('clicou no botão Login');
  };

  return (
    <section className="header-bg">
      <div className="header">
        <Link to={'/'}>
          <h2>Logo</h2>
        </Link>
        <Link to={'/login'} className="btn-login" onClick={handleClick}>
          Login
        </Link>
      </div>
    </section>
  );
};
