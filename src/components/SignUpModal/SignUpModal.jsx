import { useEffect, useState } from 'react';
import { BASE_API_URL } from '../../../config';
import { Input } from '../Input';
import './SignUpModal.css';

export const SignUpModal = ({ isModalOpen }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const getCep = async () => {
    if (cep.length === 8) {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const cepResult = await response.json();
      if (cepResult.erro) {
        alert('CEP inválido');
        return;
      }
      setEndereco(cepResult.logradouro);
      setBairro(cepResult.bairro);
      setCidade(cepResult.localidade);
      setEstado(cepResult.estado);
    } else {
      setEndereco('');
      setBairro('');
      setCidade('');
      setEstado('');
    }
  };

  useEffect(() => {
    getCep();
  }, [cep]);

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${BASE_API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nome,
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      alert(results.message);
      setNome('');
      setEmail('');
      setPassword('');
      setCep('');
      setNumero('');
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      alert(`Erro ao cadastrar usuário: ${error.message}`);
    }
  };

  return (
    <form className={isModalOpen ? 'signup' : ''} onSubmit={handleSignup}>
      <Input
        label="Nome"
        id="nome"
        value={nome}
        setValue={setNome}
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
        value={cep}
        setValue={setCep}
        placeholder="60000000"
        required
      />

      <Input
        type="text"
        label={'Endereço'}
        id={'endereco'}
        value={endereco}
        disabled
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
        disabled
        required
      />

      <Input
        type="text"
        label={'Cidade'}
        id={'cidade'}
        value={cidade}
        disabled
        required
      />

      <Input
        type="text"
        label={'Estado'}
        id={'estado'}
        value={estado}
        disabled
        required
      />

      <button className="signup-btn">Criar</button>
    </form>
  );
};
