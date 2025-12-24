import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../../hooks';
import { usersService } from '../../../services/usersService';
import { addressService } from '../../../services/addressService';
import { ROUTES } from '../../../routes/paths';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
  const { request, loading } = useFetch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    if (zipCode.length !== 8) {
      setEndereco('');
      setBairro('');
      setCidade('');
      setEstado('');
      return;
    }

    const handleZipCode = async () => {
      const result = await addressService.getAddressData(zipCode);

      if (result.error) {
        alert(result.error);
        return;
      }

      setEndereco(result.endereco);
      setBairro(result.bairro);
      setCidade(result.cidade);
      setEstado(result.estado);
    };

    handleZipCode();
  }, [zipCode]);

  const handleSignup = async (event) => {
    event.preventDefault();

    await usersService.signup(request, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      zipCode: zipCode,
      street: endereco,
      number: numero,
      neighborhood: bairro,
      city: cidade,
      state: estado,
    });

    setFirstName('');
    setEmail('');
    setPassword('');
    setZipCode('');
    setNumero('');
    navigate(ROUTES.LOGIN);
  };

  return (
    <>
      <section className={styles.form}>
        <h1 className="title">Crie a sua conta</h1>

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
            value={endereco}
            readOnly
            required
          />

          <Input
            type="number"
            label="Número"
            id="numero"
            value={numero}
            setValue={setNumero}
            required
          />

          <Input
            type="text"
            label="Bairro"
            id="bairro"
            value={bairro}
            readOnly
            required
          />

          <Input
            type="text"
            label="Cidade"
            id="cidade"
            value={cidade}
            readOnly
            required
          />

          <Input
            type="text"
            label="Estado"
            id="estado"
            value={estado}
            readOnly
            required
          />

          <Button variant="primary" disabled={loading}>
            Cadastrar
          </Button>
        </form>
      </section>
    </>
  );
};

export default SignUpForm;
