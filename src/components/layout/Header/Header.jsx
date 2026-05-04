import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { AuthContext } from '@/contexts/AuthContext';
import { UserContext } from '@/contexts/UserContext';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import styles from './Header.module.css';

// fix: add loading
const Header = ({ hideLinks = false }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { data } = useContext(UserContext);
  const userName = data?.firstName;

  const authRoute = isAuthenticated ? ROUTES.account.base : ROUTES.auth.login;

  return (
    <header className={styles.bg}>
      <section className={styles.top}>
        <LanguageSwitcher />
      </section>

      <nav className={styles.header}>
        <Link to={ROUTES.home} aria-label="Bodega - Home">
          <span className={styles.logo}>Bodega</span>
        </Link>

        {!hideLinks && (
          <Link to={authRoute} className={styles.btnHeader}>
            {isAuthenticated ? `Olá, ${userName}` : 'Entre ou cadastre-se'}
          </Link>
        )}
      </nav>
    </header>
  );
};

Header.propTypes = {
  hideLinks: PropTypes.bool,
};

export default Header;
