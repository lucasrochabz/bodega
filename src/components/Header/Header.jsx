import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css';

export const Header = () => {
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
        <Link to={teste ? '/my-account' : '/login'} className="btn-header">
          {teste ? 'Olá, User' : 'Login'}
        </Link>
      </div>
    </section>
  );
};
