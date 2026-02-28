import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes/paths';
import useResetPassword from '../../../hooks/auth/useResetPassword';
import { Head } from '../../../components/shared/Head';
import { Header } from '../../../components/layout/Header';
import { Dialog } from '../../../components/ui/Dialog';
import { Button } from '../../../components/ui/Button';
import { Footer } from '../../../components/layout/Footer';
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

    if (response?.success) {
      return setShowModal(true);
    }
  };

  return (
    <>
      <Head
        title="Redefinir senha"
        description="Descrição da página Redefinir senha"
      />

      <Header />

      {showModal && (
        <Dialog
          show={showModal}
          onClose={() => {
            setShowModal(false);
            navigate(ROUTES.LOGIN);
          }}
        >
          <h2>Senha Redefinida</h2>
          <p>Você já pode acessar a plataforma com a nova senha.</p>
        </Dialog>
      )}

      <main className={styles.authLayout}>
        <section className={styles.wrapper}>
          <h1 className="title">Redefinir senha</h1>
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResetPasswordPage;
