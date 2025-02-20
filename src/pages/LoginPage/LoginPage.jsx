import { useState } from 'react';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { LoginForm } from '../../components/LoginForm';
import { SignUpForm } from '../../components/SignUpForm';
import { Footer } from '../../components/Footer';
import './LoginPage.css';

export const LoginPage = () => {
  const [formType, setFormType] = useState('login');

  const toggleModal = () => {
    setFormType(formType === 'login' ? 'signup' : 'login');
  };

  return (
    <>
      <Head title="Login" description="Descrição da página Login" />

      <Header />

      <main className="login-container">
        {formType === 'login' ? (
          <LoginForm />
        ) : (
          <div className="signup-form">
            <h2 className="default-title">Crie a sua conta</h2>

            <SignUpForm setFormType={setFormType} />
          </div>
        )}

        <button className="btn-signup-form" onClick={toggleModal}>
          {formType === 'login' ? 'Criar conta' : 'Já tem uma conta?'}
        </button>
      </main>

      <Footer />
    </>
  );
};
