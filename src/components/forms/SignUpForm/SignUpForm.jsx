import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../../hooks';
import { usersService } from '../../../services/usersService';
import { addressService } from '../../../services/addressService';
import { ROUTES } from '../../../routes/paths';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import styles from './SignUpForm.module.css';

// fix usar hook mutation de user aqui
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
      type: 'text',
      label: 'Nome',
      name: 'firstName',
      id: 'first-name',
      value: formData.firstName,
      placeholder: 'Primeiro nome',
      required: true,
    },
    {
      type: 'text',
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
      type: 'text',
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
      type: 'text',
      label: 'Bairro',
      name: 'neighborhood',
      id: 'neighborhood',
      value: formData.neighborhood,
      required: true,
      readOnly: true,
    },
    {
      type: 'text',
      label: 'Cidade',
      name: 'city',
      id: 'city',
      value: formData.city,
      required: true,
      readOnly: true,
    },
    {
      type: 'text',
      label: 'Estado',
      name: 'state',
      id: 'state',
      value: formData.state,
      required: true,
      readOnly: true,
    },
  ];

  const debouncedZipCode = useDebounce(formData.zipCode, 500);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (debouncedZipCode.length !== 8) {
      setFormData((prev) => ({
        ...prev,
        street: '',
        neighborhood: '',
        city: '',
        state: '',
      }));
      return;
    }

    const handleZipCode = async () => {
      const result = await addressService.getAddressData(debouncedZipCode);

      if (result.error) {
        alert(result.error);
        return;
      }

      setFormData((prev) => ({
        ...prev,
        street: result.street,
        neighborhood: result.neighborhood,
        city: result.city,
        state: result.state,
      }));
    };

    handleZipCode();
  }, [debouncedZipCode]);

  const handleSignup = async (event) => {
    event.preventDefault();

    await usersService.signup({
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

    navigate(ROUTES.LOGIN);
  };

  return (
    <form className={`${styles.signup} anim-show-left`} onSubmit={handleSignup}>
      {fields.map((field) => (
        <Input
          key={field.id}
          type={field.type}
          label={field.label}
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
  );
};

export default SignUpForm;
