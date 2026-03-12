import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './AuthLayout.module.css';

const AuthLayout = ({ children, page }) => {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <section className={styles.authLayout}>
        <div className={styles.wrapper}>
          <h1 className="title">{t(`${page}.title`)}</h1>

          {children}
        </div>
      </section>
      <Footer />
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
  page: PropTypes.string,

  container: PropTypes.bool,
};

export default AuthLayout;
