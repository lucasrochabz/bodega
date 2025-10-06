import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { ROUTES } from '../../routes/paths';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { SignUpForm } from '../../components/SignUpForm';
import { Footer } from '../../components/Footer';

const RegisterPage = () => {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to={ROUTES.ACCOUNT} />;
  return (
    <>
      <Head title="Register" description="Descrição da página Register" />

      <Header />
      <main className="auth-layout">
        <SignUpForm />
      </main>
      <Footer />
    </>
  );
};

export default RegisterPage;
