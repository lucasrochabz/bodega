import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <div>
      <Header />

      <section className="login-container">
        <LoginForm />
        <RegisterForm />
      </section>

      <Footer />
    </div>
  );
};
