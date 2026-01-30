import { useState } from 'react';
import { useFetch } from '../../hooks';
import { POST_FORGOT_PASSWORD } from '../../api/auth';
import { Head } from '../../components/shared/Head';
import { Header } from '../../components/layout/Header';
import { Button } from '../../components/ui/Button';
import { Footer } from '../../components/layout/Footer';
import styles from './ForgotPasswordPage.module.css';

const ForgotPasswordPage = () => {
  const { request } = useFetch();
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const origin = window.location.origin;
    const { url, options } = POST_FORGOT_PASSWORD({ email, origin });
    const response = await request(url, options);

    if (response) {
      alert('Email enviado.');
      window.location.href = response.token;
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
      <main className={styles.authLayout}>
        <section className={styles.container}>
          <h1 className="title">Perdeu a senha?</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
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
