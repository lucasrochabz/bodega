import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { ROUTES } from '../../routes/paths';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { LoginForm } from '../../components/LoginForm';
import { Footer } from '../../components/Footer';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const { login } = useContext(UserContext);

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
