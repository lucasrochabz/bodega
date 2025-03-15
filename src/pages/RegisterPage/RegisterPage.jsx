import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { SignUpForm } from '../../components/SignUpForm';
import { Footer } from '../../components/Footer';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Navigate } from 'react-router-dom';

export const RegisterPage = () => {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to={'/account'} />;
  return (
    <>
      <Head title="Register" description="Descrição da página Register" />

      <Header />
      <SignUpForm />
      <Footer />
    </>
  );
};
