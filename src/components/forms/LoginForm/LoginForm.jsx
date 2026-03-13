import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../contexts/AuthContext';
import { useFormValidation } from '@/hooks/shared';
import { loginSchema } from '@/schemas/loginSchema';
import { Input } from '@/components/ui/Input';
import { Button } from '../../ui/Button';
import { Toast } from '../../ui/Toast';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const { t } = useTranslation();
  const inputElement = useRef(null);
  const { login, isLoading, error, clearError } = useContext(AuthContext);
  const buttonLabel = isLoading
    ? t('auth.login.loading')
    : t('auth.login.title');

  const [showPassword, setShowPassword] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useFormValidation(
    loginSchema,
    login,
    {
      email: '',
      password: '',
    },
  );

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

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          ref={inputElement}
          label="Email"
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
        />

        {errors.email && <small>{errors.email}</small>}

        <Input
          label="Senha"
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <small>{errors.password}</small>}

        <button
          className={styles.btnPassword}
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? '🙈 Ocultar' : '👁️ Mostrar'}
        </button>

        <Button disabled={isLoading}>{buttonLabel}</Button>
      </form>
    </>
  );
};

export default LoginForm;
