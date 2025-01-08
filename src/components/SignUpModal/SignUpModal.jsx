import { useEffect, useState } from 'react';
import { Input } from '../Input';
import { RequestButton } from '../RequestButton/RequestButton';
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
        return alert('Cep inválido');
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

  const handleSignup = () => {
    console.log('Criou a conta');
  };

  return (
    <form className={isModalOpen ? 'signup' : ''}>
      <Input label="Nome" id="nome" value={nome} setValue={setNome} required />

      <Input
        label="Email"
        id="email"
        value={email}
        setValue={setEmail}
        placeholder="Digite seu email"
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

      <Input label={'Cep'} id={'cep'} value={cep} setValue={setCep} required />

      <Input
        label={'Endereço'}
        id={'endereco'}
        value={endereco}
        disabled
        required
      />

      <Input
        label={'Número'}
        id={'numero'}
        value={numero}
        setValue={setNumero}
        required
      />

      <Input label={'Bairro'} id={'bairro'} value={bairro} disabled required />

      <Input label={'Cidade'} id={'cidade'} value={cidade} disabled required />

      <Input label={'Estado'} id={'estado'} value={estado} disabled required />

      <RequestButton text="Criar" handleClick={handleSignup} />
    </form>
  );
};
