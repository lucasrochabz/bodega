import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormValidation } from '@/hooks/shared';
import { loginSchema } from '@/schemas/loginSchema';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import styles from './LoginForm.module.css';

const LoginForm = ({ onSubmit, isLoading }) => {
  const { t } = useTranslation();

  const inputElement = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useFormValidation(
    loginSchema,
    onSubmit,
    {
      email: '',
      password: '',
    },
  );

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
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
        type={showPassword ? 'text' : 'password'}
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

      <Button disabled={isLoading}>
        {isLoading ? t('auth.login.loading') : t('auth.login.title')}
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default LoginForm;
