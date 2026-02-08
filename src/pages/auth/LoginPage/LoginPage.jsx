import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { ROUTES } from '../../../routes/paths';
import { Head } from '../../../components/shared/Head';
import { Header } from '../../../components/layout/Header';
import { LoginForm } from '../../../components/forms/LoginForm';
import { Footer } from '../../../components/layout/Footer';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  if (login) return <Navigate to={ROUTES.HOME} />;
  return (
    <>
      <Head title="Login" description="Descrição da página Login" />
      <Header />

      <main className={styles.authLayout}>
        <LoginForm />
      </main>

      <Footer />
    </>
  );
};

export default LoginPage;
