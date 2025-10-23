import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useFetch } from '../../hooks';
import { POST_RESET_PASSWORD } from '../../api/auth';
import { ROUTES } from '../../routes/paths';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import './ResetPasswordPage.css';

const ResetPasswordPage = () => {
  const { request, results } = useFetch();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { url, options } = POST_RESET_PASSWORD({ token, newPassword });
    request(url, options);
  };

  useEffect(() => {
    if (results?.success) {
      alert('Senha redefinida com sucesso');
      navigate(ROUTES.LOGIN);
    }
  }, [results, navigate]);

  return (
    <>
      <Head
        title="Redefinir senha"
        description="Descrição da página Redefinir senha"
      />

      <Header />
      <main className="auth-layout">
        <section className="reset-password">
          <h1 className="default-title">Redefinir senha</h1>
          <form onSubmit={handleSubmit} className="reset-password-form">
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

            <Button variant="primary">Redefinir senha</Button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResetPasswordPage;
