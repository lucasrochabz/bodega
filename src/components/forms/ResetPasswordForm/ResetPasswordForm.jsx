import PropTypes from 'prop-types';
import { useState } from 'react';
import { useResetPassword } from '@/hooks/auth';
import { Dialog } from '@/components/ui/Dialog';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import styles from './ResetPasswordForm.module.css';

const ResetPasswordForm = ({ token, onSuccess }) => {
  const [newPassword, setNewPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const { sendNewPassword, isLoading, error } = useResetPassword();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) return alert('Token inválido');

    const response = await sendNewPassword({ token, newPassword });
    if (response) return setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <Dialog
          show={showModal}
          onClose={() => {
            setShowModal(false);
            onSuccess();
          }}
        >
          <h2>Senha Redefinida</h2>
          <p>Você já pode acessar a plataforma com a nova senha.</p>
        </Dialog>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="Nova senha"
          type="password"
          name="newPassword"
          id="newPassword"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          required
        />

        {error && <p>{error}</p>}

        <Button disabled={isLoading}>
          {isLoading ? 'Redefinindo...' : 'Redefinir senha'}
        </Button>
      </form>
    </>
  );
};

ResetPasswordForm.propTypes = {
  token: PropTypes.string,
  onSuccess: PropTypes.func.isRequired,
};

export default ResetPasswordForm;
