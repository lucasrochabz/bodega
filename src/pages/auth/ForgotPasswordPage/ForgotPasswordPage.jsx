import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useForgotPassword from '../../../hooks/auth/useForgotPassword';
import { Head } from '../../../components/shared/Head';
import { Header } from '../../../components/layout/Header';
import { Button } from '../../../components/ui/Button';
import { Footer } from '../../../components/layout/Footer';
import styles from './ForgotPasswordPage.module.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const { sendEmail, isLoading, error } = useForgotPassword();
  const buttonLabel = isLoading ? 'Enviando...' : 'Enviar email';

  const { t } = useTranslation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await sendEmail(email);

    if (response) {
      alert('Email enviado.');
      window.location.href = response;
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
          <h1 className="title">{t('forgot.title')}</h1>

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

            <Button disabled={isLoading}>{buttonLabel}</Button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ForgotPasswordPage;
