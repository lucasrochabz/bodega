import PropTypes from 'prop-types';
import styles from './Input.module.css';
import { forwardRef } from 'react';

// fix: integrar erro direto aqui
// fix: tentar usar o ref
const Input = forwardRef(
  ({ label, type = 'text', name, id, ...props }, ref) => {
    return (
      <>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>

        <input
          ref={ref}
          className={styles.input}
          type={type}
          name={name}
          id={id}
          {...props}
        />
      </>
    );
  },
);

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
