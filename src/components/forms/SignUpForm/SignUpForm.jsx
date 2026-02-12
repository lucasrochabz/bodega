import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFetch, useDebounce } from '../../../hooks';
import { usersService } from '../../../services/usersService';
import { addressService } from '../../../services/addressService';
import { ROUTES } from '../../../routes/paths';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import styles from './SignUpForm.module.css';

// fix: usar forma melhor para não repetir tanto useState
const SignUpForm = () => {
  const { request, loading } = useFetch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [zipCode, setZipCode] = useState('');

  const debouncedZipCode = useDebounce(zipCode, 500);

  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    if (debouncedZipCode.length !== 8) {
      setStreet('');
      setNeighborhood('');
      setCity('');
      setState('');
      return;
    }

    const handleZipCode = async () => {
      const result = await addressService.getAddressData(debouncedZipCode);

      if (result.error) {
        alert(result.error);
        return;
      }

      setStreet(result.street);
      setNeighborhood(result.neighborhood);
      setCity(result.city);
      setState(result.state);
    };

    handleZipCode();
  }, [debouncedZipCode]);

  const handleSignup = async (event) => {
    event.preventDefault();

    await usersService.signup(request, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      zipCode: zipCode,
      street: street,
      number: number,
      neighborhood: neighborhood,
      city: city,
      state: state,
    });

    setFirstName('');
    setEmail('');
    setPassword('');
    setZipCode('');
    setNumber('');
    navigate(ROUTES.LOGIN);
  };

  return (
    <section className={styles.form}>
      <h1 className="title">{t('register.title')}</h1>

      <form
        className={`${styles.signup} anim-show-left`}
        onSubmit={handleSignup}
      >
        <Input
          type="text"
          label="Nome"
          id="first-name"
          value={firstName}
          setValue={setFirstName}
          placeholder="Primeiro nome"
          required
        />

        <Input
          type="text"
          label="Sobrenome"
          id="last-name"
          value={lastName}
          setValue={setLastName}
          placeholder="Sobrenome"
          required
        />

        <Input
          type="email"
          label="E-mail"
          id="email"
          value={email}
          setValue={setEmail}
          placeholder="exemplo@email.com"
          required
        />

        <Input
          type="password"
          label="Senha"
          id="password"
          value={password}
          setValue={setPassword}
          required
        />

        <Input
          type="number"
          label="CEP"
          id="cep"
          value={zipCode}
          setValue={setZipCode}
          placeholder="60000000"
          required
        />

        <Input
          type="text"
          label="Endereço"
          id="endereco"
          value={street}
          readOnly
          required
        />

        <Input
          type="number"
          label="Número"
          id="numero"
          value={number}
          setValue={setNumber}
          required
        />

        <Input
          type="text"
          label="Bairro"
          id="bairro"
          value={neighborhood}
          readOnly
          required
        />

        <Input
          type="text"
          label="Cidade"
          id="cidade"
          value={city}
          readOnly
          required
        />

        <Input
          type="text"
          label="Estado"
          id="estado"
          value={state}
          readOnly
          required
        />

        <Button variant="primary" disabled={loading}>
          Cadastrar
        </Button>
      </form>
    </section>
  );
};

export default SignUpForm;
