import { useEffect, useState } from 'react';
import { BASE_API_URL } from '../../../config';
import { Input } from '../Input';
import './SignUpForm.css';

export const SignUpForm = ({ setFormType }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const getCep = async () => {
    if (zipCode.length === 8) {
      const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json`);
      const cepResult = await response.json();
      if (cepResult.erro) {
        alert('CEP inválido');
        return;
      }
      setEndereco(cepResult.logradouro);
      setBairro(cepResult.bairro);
      setCidade(cepResult.localidade);
      setEstado(cepResult.uf);
    } else {
      setEndereco('');
      setBairro('');
      setCidade('');
      setEstado('');
    }
  };

  useEffect(() => {
    getCep();
  }, [zipCode]);

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${BASE_API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          zip_code: zipCode,
          street: endereco,
          number: numero,
          neighborhood: bairro,
          city: cidade,
          state: estado,
        }),
      });

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      alert(results.message);
      setName('');
      setEmail('');
      setPassword('');
      setZipCode('');
      setNumero('');
      setFormType('login');
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      alert(`Erro ao cadastrar usuário: ${error.message}`);
    }
  };

  return (
    <>
      <div className="signup-form">
        <h2 className="default-title">Crie a sua conta</h2>

        <form className="signup" onSubmit={handleSignup}>
          <Input
            label="Name"
            id="name"
            value={name}
            setValue={setName}
            placeholder="Nome completo"
            required
          />

          <Input
            type="email"
            label="Email"
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

          <button className="btn-signup">Criar</button>
        </form>
      </div>
    </>
  );
};
