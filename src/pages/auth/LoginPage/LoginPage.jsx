import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../contexts/AuthContext';
import { ROUTES } from '../../../routes/paths';
import { Head } from '../../../components/shared/Head';
import { Header } from '../../../components/layout/Header';
import { LoginForm } from '../../../components/forms/LoginForm';
import { Footer } from '../../../components/layout/Footer';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const { t } = useTranslation();

  if (isAuthenticated) return <Navigate to={ROUTES.HOME} replace />;
  return (
    <>
      <Head title="Login" description="Descrição da página Login" />
      <Header />

      <main className={styles.authLayout}>
        <section className={styles.wrapper}>
          <h1 className="title">{t('login.title')}</h1>

          <LoginForm />

          <Link to={ROUTES.FORGOT_PASSWORD} style={{ padding: '1rem 0' }}>
            Perdeu a senha?
          </Link>

          <Link to={ROUTES.REGISTER} className={styles.btnForm}>
            Criar conta
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LoginPage;
