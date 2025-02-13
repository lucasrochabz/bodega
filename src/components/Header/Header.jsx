import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { useLocalStorage } from '../../hooks';
import './Header.css';

export const Header = () => {
  const { statusUser } = useContext(UserContext);
  const [userName, setUserName] = useLocalStorage('name', '');

  return (
    <section className="header-bg">
      <div className="header">
        <Link to={'/'}>
          <h2 className="logo">Bodega</h2>
        </Link>
        <Link
          to={statusUser !== 'false' ? '/my-account' : '/login'}
          className="btn-header"
        >
          {statusUser !== 'false' ? `Olá, ${userName}` : 'Login'}
        </Link>
      </div>
    </section>
  );
};
