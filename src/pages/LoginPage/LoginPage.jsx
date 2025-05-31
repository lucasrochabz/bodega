import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { LoginForm } from '../../components/LoginForm';
import { Footer } from '../../components/Footer';
import './LoginPage.css';

export const LoginPage = () => {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to={'/'} />;
  return (
    <>
      <Head title="Login" description="Descrição da página Login" />
      <Header />

      <main className="auth-layout">
        <LoginForm />
      </main>

      <Footer />
    </>
  );
};
