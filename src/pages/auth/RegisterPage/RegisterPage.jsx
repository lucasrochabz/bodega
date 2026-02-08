import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { ROUTES } from '../../../routes/paths';
import { Head } from '../../../components/shared/Head';
import { Header } from '../../../components/layout/Header';
import { SignUpForm } from '../../../components/forms/SignUpForm';
import { Footer } from '../../../components/layout/Footer';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const { login } = useContext(AuthContext);

  if (login) return <Navigate to={ROUTES.ACCOUNT} />;
  return (
    <>
      <Head title="Register" description="Descrição da página Register" />

      <Header />
      <main className={styles.authLayout}>
        <SignUpForm />
      </main>
      <Footer />
    </>
  );
};

export default RegisterPage;
