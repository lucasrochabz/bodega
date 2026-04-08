import PropTypes from 'prop-types';
import { useEffect, useReducer } from 'react';
import { useAddress, useDebounce } from '@/hooks/shared';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { Toast } from '../../ui/Toast';
import styles from './SignupForm.module.css';
import { initialState, signupFormReducer } from '@/reducers/formReducer';

// fix: ajustar esse reducer
const SignupForm = ({ onSubmit, isLoading }) => {
  const [formData, dispatch] = useReducer(signupFormReducer, initialState);

  const debouncedZipCode = useDebounce(formData.zipCode, 500);
  const { address, error } = useAddress(debouncedZipCode);

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

  useEffect(() => {
    if (!address) return;

    dispatch({
      type: 'SET_ADDRESS',
      payload: {
        street: address.street,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.state,
      },
    });
  }, [address]);

  return (
    <>
      <Toast show={!!error} message={error} />

      <form
        className={`${styles.signup} anim-show-left`}
        onSubmit={handleSubmit}
      >
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

        <Input
          label="CEP"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />

        <Input
          label="Endereço"
          name="street"
          value={formData.street}
          readOnly
        />

        <Input
          label="Número"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />

        <Input
          label="Bairro"
          name="neighborhood"
          value={formData.neighborhood}
          readOnly
        />

        <Input label="Cidade" name="city" value={formData.city} readOnly />

        <Input label="Estado" name="state" value={formData.state} readOnly />

        <Button disabled={isLoading}>
          {isLoading ? 'Cadastrando...' : 'Cadastrar'}
        </Button>
      </form>
    </>
  );
};

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default SignupForm;
