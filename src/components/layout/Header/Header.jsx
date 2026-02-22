import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { ROUTES } from '../../../routes/paths';
import { LanguageSwitcher } from '../../ui/LanguageSwitcher';
import styles from './Header.module.css';

const Header = ({ hideLinks = false }) => {
  const { data, isAuthenticated } = useContext(AuthContext);

  const userName = data?.firstName;

  const authRoute = isAuthenticated ? ROUTES.ACCOUNT : ROUTES.LOGIN;
  const authLinkLabel = isAuthenticated
    ? `Olá, ${userName}`
    : 'Entre ou cadastre-se';

  return (
    <header className={styles.bg}>
      <nav className={styles.header}>
        <Link to={ROUTES.HOME} aria-label="Bodega - Home">
          <span className={styles.logo}>Bodega</span>
        </Link>

        <LanguageSwitcher />

        {!hideLinks && (
          <Link to={authRoute} className={styles.btnHeader}>
            {authLinkLabel}
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
