import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useAddress, useDebounce } from '@/hooks/shared';
import { useSignup } from '@/hooks/users';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { Toast } from '../../ui/Toast';
import styles from './SignupForm.module.css';

const SignupForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    zipCode: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  const fields = [
    {
      label: 'Nome',
      name: 'firstName',
      id: 'first-name',
      placeholder: 'Primeiro nome',
      required: true,
    },
    {
      label: 'Sobrenome',
      name: 'lastName',
      id: 'last-name',
      placeholder: 'Sobrenome',
      required: true,
    },

    {
      label: 'E-mail',
      type: 'email',
      name: 'email',
      id: 'email',
      placeholder: 'exemplo@email.com',
      required: true,
    },
    {
      label: 'Senha',
      type: 'password',
      name: 'password',
      id: 'password',
      required: true,
    },
    {
      label: 'CEP',
      type: 'number',
      name: 'zipCode',
      id: 'zip-code',
      placeholder: '60000000',
      required: true,
    },
    {
      label: 'Endereço',
      name: 'street',
      id: 'street',
      required: true,
      readOnly: true,
    },
    {
      label: 'Número',
      type: 'number',
      name: 'number',
      id: 'number',
      required: true,
    },
    {
      label: 'Bairro',
      name: 'neighborhood',
      id: 'neighborhood',
      required: true,
      readOnly: true,
    },
    {
      label: 'Cidade',
      name: 'city',
      id: 'city',
      required: true,
      readOnly: true,
    },
    {
      label: 'Estado',
      name: 'state',
      id: 'state',
      required: true,
      readOnly: true,
    },
  ];

  const debouncedZipCode = useDebounce(formData.zipCode, 500);
  const { address, error } = useAddress(debouncedZipCode);

  const { signup, isLoading } = useSignup();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    const response = await signup(formData);
    if (response) onSuccess();
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      street: address.street,
      neighborhood: address.neighborhood,
      city: address.city,
      state: address.state,
    }));
  }, [address]);

  return (
    <>
      <Toast show={!!error} message={error} />

      <form
        className={`${styles.signup} anim-show-left`}
        onSubmit={handleSignup}
      >
        {fields.map((field) => (
          <Input
            key={field.id}
            label={field.label}
            type={field.type}
            name={field.name}
            id={field.id}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            readOnly={field.readOnly}
            required={field.required}
          />
        ))}

        <Button disabled={isLoading}>
          {isLoading ? 'Cadastrando...' : 'Cadastrar'}
        </Button>
      </form>
    </>
  );
};

SignupForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default SignupForm;
