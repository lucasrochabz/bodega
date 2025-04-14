import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_ADDRESS_DATA } from '../../api/address';
import { POST_USERS } from '../../api/users';
import { useFetch } from '../../hooks/useFetch';
import { Input } from '../Input';
import { Button } from '../Button';
import './SignUpForm.css';

export const SignUpForm = () => {
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

  const getAddressData = async () => {
    if (zipCode.length !== 8) {
      setEndereco('');
      setBairro('');
      setCidade('');
      setEstado('');
      return;
    }
    const { url, options } = GET_ADDRESS_DATA(zipCode);
    const response = await fetch(url, options);

    const cepResult = await response.json();
    if (cepResult.erro) {
      alert('CEP inválido');
      return;
    }

    setEndereco(cepResult.logradouro);
    setBairro(cepResult.bairro);
    setCidade(cepResult.localidade);
    setEstado(cepResult.uf);
  };

  useEffect(() => {
    getAddressData();
  }, [zipCode]);

  const handleSignup = async (event) => {
    event.preventDefault();

    const { url, options } = POST_USERS({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      zip_code: zipCode,
      street: endereco,
      number: numero,
      neighborhood: bairro,
      city: cidade,
      state: estado,
    });
    request(url, options);

    setFirstName('');
    setEmail('');
    setPassword('');
    setZipCode('');
    setNumero('');
    navigate('/login');
  };

  return (
    <>
      <section className="signup-form">
        <h1 className="default-title">Crie a sua conta</h1>

        <form className="signup" onSubmit={handleSignup}>
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
            label={'CEP'}
            id={'cep'}
            value={zipCode}
            setValue={setZipCode}
            placeholder="60000000"
            required
          />

          <Input
            type="text"
            label={'Endereço'}
            id={'endereco'}
            value={endereco}
            readOnly
            required
          />

          <Input
            type="number"
            label={'Número'}
            id={'numero'}
            value={numero}
            setValue={setNumero}
            required
          />

          <Input
            type="text"
            label={'Bairro'}
            id={'bairro'}
            value={bairro}
            readOnly
            required
          />

          <Input
            type="text"
            label={'Cidade'}
            id={'cidade'}
            value={cidade}
            readOnly
            required
          />

          <Input
            type="text"
            label={'Estado'}
            id={'estado'}
            value={estado}
            readOnly
            required
          />

          <Button type="primary" disabled={loading}>
            Cadastrar
          </Button>
        </form>
      </section>
    </>
  );
};
