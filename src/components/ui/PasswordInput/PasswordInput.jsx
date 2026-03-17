import { useState } from 'react';
import styles from './PasswordInput.module.css';

const PasswordInput = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <label htmlFor="password" className={styles.label}>
        Senha
      </label>

      <input
        className={styles.input}
        type={showPassword ? 'text' : 'password'}
        name="password"
        id="password"
        {...props}
      />

      <button
        className={styles.btnPassword}
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? '🙈 Ocultar' : '👁️ Mostrar'}
      </button>
    </>
  );
};

export default PasswordInput;
