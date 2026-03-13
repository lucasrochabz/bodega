import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../paths';
import { useResetPassword } from '@/hooks/auth';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Dialog } from '../../../components/ui/Dialog';
import { Button } from '../../../components/ui/Button';
import styles from './ResetPasswordPage.module.css';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [newPassword, setNewPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const { sendNewPassword, isLoading, error } = useResetPassword();
  const buttonLabel = isLoading ? 'Redefinindo...' : 'Redefinir senha';

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) return alert('Token inválido');

    const response = await sendNewPassword({ token, newPassword });
    if (response) return setShowModal(true);
  };

  return (
    <AuthLayout page="reset">
      {showModal && (
        <Dialog
          show={showModal}
          onClose={() => {
            setShowModal(false);
            navigate(ROUTES.auth.login);
          }}
        >
          <h2>Senha Redefinida</h2>
          <p>Você já pode acessar a plataforma com a nova senha.</p>
        </Dialog>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="newPassword" className="label">
          Nova senha
        </label>

        <input
          type="password"
          name="newPassword"
          id="newPassword"
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
          required
          className="input"
        />

        {error && <p>{error}</p>}

        <Button disabled={isLoading}>{buttonLabel}</Button>
      </form>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
