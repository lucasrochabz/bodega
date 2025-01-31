import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { LoginForm } from '../../components/LoginForm';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import { Footer } from '../../components/Footer';
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <>
      <Head title="Login" description="Descrição da página Login" />

      <Header />

      <main className="login-container">
        <LoginForm />
        <SignUpForm />
      </main>

      <Footer />
    </>
  );
};
