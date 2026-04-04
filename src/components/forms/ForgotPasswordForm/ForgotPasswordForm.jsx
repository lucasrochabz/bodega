import PropTypes from 'prop-types';
import { useFormValidation } from '@/hooks/shared';
import { forgotPasswordSchema } from '@/schemas/forgotPasswordSchema';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import styles from './ForgotPasswordForm.module.css';

const ForgotPasswordForm = ({ onSubmit, isLoading }) => {
  const initialValues = { email: '' };

  const { values, errors, handleChange, handleSubmit } = useFormValidation(
    forgotPasswordSchema,
    onSubmit,
    initialValues,
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Email"
        type="email"
        name="email"
        id="email"
        value={values.email}
        onChange={handleChange}
        required
      />

      <Button disabled={isLoading}>
        {isLoading ? 'Enviando...' : 'Enviar email'}
      </Button>
    </form>
  );
};

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default ForgotPasswordForm;
