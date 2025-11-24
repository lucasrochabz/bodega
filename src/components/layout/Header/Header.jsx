import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import { ROUTES } from '../../../routes/paths';
import styles from './Header.module.css';

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.bg}>
      <nav className={styles.header}>
        <Link to={ROUTES.HOME} aria-label="Bodega - Home">
          <span className={styles.logo}>Bodega</span>
        </Link>
        <Link
          to={data ? ROUTES.ACCOUNT : ROUTES.LOGIN}
          className={styles.btnHeader}
        >
          {data ? `Olá, ${data.first_name}` : 'Entre ou cadastre-se'}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
