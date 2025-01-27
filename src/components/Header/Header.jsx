import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './Header.css';
import { Logout } from '../Logout';

export const Header = () => {
  const { statusUser, login, logout } = useContext(UserContext);
  const [teste, setTeste] = useState(false);

  const getLocalStorage = () => {
    const userStorage = localStorage.getItem('user');
    if (userStorage) {
      setTeste(true);
    } else {
      setTeste(false);
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <section className="header-bg">
      <div className="header">
        <Link to={'/'}>
          <h2 className="logo">Bodega</h2>
        </Link>
        {teste ? (
          <Link to={'/my-account'} className="btn-header">
            Olá, User
          </Link>
        ) : (
          <Link to={'/login'} className="btn-header">
            Login
          </Link>
        )}
      </div>
    </section>
  );
};
