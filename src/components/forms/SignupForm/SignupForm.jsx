import PropTypes from 'prop-types';
import { useReducer } from 'react';
import { initialState, signupFormReducer } from '@/reducers/signupFormReducer';
import { AddressForm } from '@/components/forms/AddressForm';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import styles from './SignupForm.module.css';

const SignupForm = ({ onSubmit, isLoading }) => {
  const [formData, dispatch] = useReducer(signupFormReducer, initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    dispatch({
      type: 'UPDATE_FIELD',
      field: name,
      value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);
  };

  return (
    <form className={`${styles.signup} anim-show-left`} onSubmit={handleSubmit}>
      <Input
        label="Nome"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <Input
        label="Sobrenome"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <Input
        label="E-mail"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        label="Senha"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <AddressForm formData={formData} dispatch={dispatch} />

      <Button disabled={isLoading}>
        {isLoading ? 'Cadastrando...' : 'Cadastrar'}
      </Button>
    </form>
  );
};

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default SignupForm;
