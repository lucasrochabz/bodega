import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { ROUTES } from '../../../routes/paths';
import { LanguageSwitcher } from '../../ui/LanguageSwitcher';
import styles from './Header.module.css';

const Header = ({ hideLinks = false }) => {
  const { data } = useContext(AuthContext);

  return (
    <header className={styles.bg}>
      <nav className={styles.header}>
        <Link to={ROUTES.HOME} aria-label="Bodega - Home">
          <span className={styles.logo}>Bodega</span>
        </Link>

        <LanguageSwitcher />

        {!hideLinks && (
          <Link
            to={data ? ROUTES.ACCOUNT : ROUTES.LOGIN}
            className={styles.btnHeader}
          >
            {data ? `Olá, ${data.first_name}` : 'Entre ou cadastre-se'}
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
