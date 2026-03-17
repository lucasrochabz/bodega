import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/shared/SEO';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './AuthLayout.module.css';

const AuthLayout = ({ children, page }) => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t(`auth.${page}.title`)}
        description={t(`auth.description`)}
      />

      <Header />

      <main className={styles.authLayout}>
        <section className={styles.wrapper}>
          <h1 className="title">{t(`auth.${page}.title`)}</h1>

          {children}
        </section>
      </main>
      <Footer />
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
  page: PropTypes.string.isRequired,
};

export default AuthLayout;
