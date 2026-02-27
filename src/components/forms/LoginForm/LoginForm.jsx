import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../contexts/AuthContext';
import { ROUTES } from '../../../routes/paths';
import { Toast } from '../../ui/Toast';
import { Button } from '../../ui/Button';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const inputElement = useRef(null);
  const { login, loading, error, clearError } = useContext(AuthContext);
  const buttonLabel = loading ? 'Aguarde...' : 'Entrar';

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { t } = useTranslation();

  const validateInput = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      console.log('os campos estão vazios');
      return false;
    } else {
      console.log('Login feito');
      return true;
    }
  };

  const verifyUser = async (event) => {
    event.preventDefault();

    await login(email, password);
  };

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <>
      <Toast
        show={!!error}
        message={error}
        onClose={() => {
          clearError();
        }}
      />

      <section className={styles.container}>
        {/* fix: tirar esse h1 daqui */}
        <h1 className="title">{t('login.title')}</h1>

        <form className={styles.form} onSubmit={verifyUser}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={inputElement}
            required
          />

          <label htmlFor="password">Senha</label>
          <div className={styles.wrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              className={styles.btnPassword}
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? '🙈 Ocultar' : '👁️ Mostrar'}
            </button>
          </div>

          <Button disabled={loading}>{buttonLabel}</Button>
        </form>

        <Link to={ROUTES.FORGOT_PASSWORD} style={{ padding: '1rem 0' }}>
          Perdeu a senha?
        </Link>

        <Link to={ROUTES.REGISTER} className={styles.btnForm}>
          Criar conta
        </Link>
      </section>
    </>
  );
};

export default LoginForm;
