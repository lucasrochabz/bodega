import { useState } from 'react';
import { useForgotPassword } from '@/hooks/auth';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Button } from '../../../components/ui/Button';
import styles from './ForgotPasswordPage.module.css';

// fix: corrigir form e estilo
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const { sendEmail, isLoading, error } = useForgotPassword();
  const buttonLabel = isLoading ? 'Enviando...' : 'Enviar email';

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await sendEmail(email);

    if (response) {
      alert('Email enviado.');
      window.location.href = response;
      setEmail('');
    }
  };

  return (
    <AuthLayout page="forgot">
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
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
