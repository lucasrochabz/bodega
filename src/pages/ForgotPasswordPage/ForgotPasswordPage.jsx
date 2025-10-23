import { useState } from 'react';
import { useFetch } from '../../hooks';
import { POST_FORGOT_PASSWORD } from '../../api/auth';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const { request } = useFetch();
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);

    const { url, options } = POST_FORGOT_PASSWORD(email);
    const response = await request(url, options);

    if (response) {
      console.log(response);
      alert('Email enviado.');
      window.location.href = response.resetUrl;
    }
    setEmail('');
  };

  return (
    <>
      <Head
        title="Recuperar senha"
        description="Descrição da página Forgot Password"
      />
      <Header />
      <main className="auth-layout">
        <section className="forgot-password">
          <h1 className="default-title">Perdeu a senha?</h1>
          <form onSubmit={handleSubmit} className="forgot-password-form">
            <label htmlFor="email" className="label">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="input"
            />

            <Button variant="primary">Enviar email</Button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ForgotPasswordPage;
