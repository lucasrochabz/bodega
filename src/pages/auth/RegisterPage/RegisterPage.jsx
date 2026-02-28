import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../contexts/AuthContext';
import { ROUTES } from '../../../routes/paths';
import { Head } from '../../../components/shared/Head';
import { Header } from '../../../components/layout/Header';
import { SignUpForm } from '../../../components/forms/SignUpForm';
import { Footer } from '../../../components/layout/Footer';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { t } = useTranslation();

  if (isAuthenticated) return <Navigate to={ROUTES.ACCOUNT} />;
  return (
    <>
      <Head title="Register" description="Descrição da página Register" />

      <Header />

      <main className={styles.authLayout}>
        <section className={styles.wrapper}>
          <h1 className="title">{t('register.title')}</h1>

          <SignUpForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RegisterPage;
