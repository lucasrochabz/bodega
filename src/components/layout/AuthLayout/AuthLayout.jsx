import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Head } from '@/components/shared/Head';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './AuthLayout.module.css';

const AuthLayout = ({ children, page }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head
        title={t(`auth.${page}.title`)}
        description={t(`auth.description`)}
      />

      <Header />

      <section className={styles.authLayout}>
        <div className={styles.wrapper}>
          <h1 className="title">{t(`auth.${page}.title`)}</h1>

          {children}
        </div>
      </section>
      <Footer />
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
  page: PropTypes.string.isRequired,
};

export default AuthLayout;
