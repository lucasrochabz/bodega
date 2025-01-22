import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LoginForm } from '../../components/LoginForm';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import './LoginPage.css';
import { Head } from '../../components/Head';

export const LoginPage = () => {
  return (
    <>
      <Head title="Login" description="Descrição da página Login" />

      <Header />

      <section className="login-container">
        <LoginForm />
        <SignUpForm />
      </section>

      <Footer />
    </>
  );
};
