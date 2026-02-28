import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAddress from '../../../hooks/shared/useAddress';
import { useDebounce } from '../../../hooks';
import { usersService } from '../../../services/usersService';
import { ROUTES } from '../../../routes/paths';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { Toast } from '../../ui/Toast';
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
  const navigate = useNavigate();

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
      value: formData.firstName,
      placeholder: 'Primeiro nome',
      required: true,
    },
    {
      label: 'Sobrenome',
      name: 'lastName',
      id: 'last-name',
      value: formData.lastName,
      placeholder: 'Sobrenome',
      required: true,
    },

    {
      type: 'email',
      label: 'E-mail',
      name: 'email',
      id: 'email',
      value: formData.email,
      placeholder: 'exemplo@email.com',
      required: true,
    },
    {
      type: 'password',
      label: 'Senha',
      name: 'password',
      id: 'password',
      value: formData.password,
      required: true,
    },
    {
      type: 'number',
      label: 'CEP',
      name: 'zipCode',
      id: 'zip-code',
      value: formData.zipCode,
      placeholder: '60000000',
      required: true,
    },
    {
      label: 'Endereço',
      name: 'street',
      id: 'street',
      value: formData.street,
      required: true,
      readOnly: true,
    },
    {
      type: 'number',
      label: 'Número',
      name: 'number',
      id: 'number',
      value: formData.number,
      required: true,
    },
    {
      label: 'Bairro',
      name: 'neighborhood',
      id: 'neighborhood',
      value: formData.neighborhood,
      required: true,
      readOnly: true,
    },
    {
      label: 'Cidade',
      name: 'city',
      id: 'city',
      value: formData.city,
      required: true,
      readOnly: true,
    },
    {
      label: 'Estado',
      name: 'state',
      id: 'state',
      value: formData.state,
      required: true,
      readOnly: true,
    },
  ];

  const debouncedZipCode = useDebounce(formData.zipCode, 500);
  const { address, error } = useAddress(debouncedZipCode);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // fix usar hook mutation de user aqui
  const handleSignup = async (event) => {
    event.preventDefault();

    await usersService.signup(formData);
    navigate(ROUTES.LOGIN);
  };

  useEffect(() => {
    if (!address) return;

    setFormData((prev) => ({
      ...prev,
      street: address.street,
      neighborhood: address.neighborhood,
      city: address.city,
      state: address.state,
    }));
  }, [address]);

  useEffect(() => {
    if (debouncedZipCode.length !== 8) {
      setFormData((prev) => ({
        ...prev,
        street: '',
        neighborhood: '',
        city: '',
        state: '',
      }));
    }
  }, [debouncedZipCode]);

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
            value={field.value}
            onChange={handleChange}
            placeholder={field.placeholder}
            readOnly={field.readOnly}
            required={field.required}
          />
        ))}
        <Button>Cadastrar</Button>
      </form>
    </>
  );
};

export default SignUpForm;
