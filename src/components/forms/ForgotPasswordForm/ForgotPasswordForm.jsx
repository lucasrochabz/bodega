import { useState } from 'react';
import { useForgotPassword } from '@/hooks/auth';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import styles from './ForgotPasswordForm.module.css';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const { sendEmail, isLoading, error } = useForgotPassword();

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Email"
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Button disabled={isLoading}>
        {isLoading ? 'Enviando...' : 'Enviar email'}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
