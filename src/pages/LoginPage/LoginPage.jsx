import { Link } from 'react-router-dom';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { LoginForm } from '../../components/LoginForm';
import { Footer } from '../../components/Footer';
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <>
      <Head title="Login" description="Descrição da página Login" />
      <Header />

      <main className="login-container">
        <LoginForm />

        <Link to={'/register'} className="btn-signup-form">
          Criar conta
        </Link>
      </main>

      <Footer />
    </>
  );
};
