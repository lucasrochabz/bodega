import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <>
      <Header />

      <section className="login-container">
        <LoginForm />
        <SignUpForm />
      </section>

      <Footer />
    </>
  );
};
