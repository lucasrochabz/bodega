import { useState } from 'react';
import { Input } from './Input';

export const Ateste = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');

  return (
    <>
      <h2>Formulário teste</h2>
      <form>
        <Input
          label="Nome"
          id="nome"
          value={nome}
          setValue={setNome}
          required
        />

        <Input
          label="Email"
          id="email"
          value={email}
          setValue={setEmail}
          placeholder="Digite seu email"
          required
        />

        <Input
          label="Senha"
          id="senha"
          value={senha}
          setValue={setSenha}
          required
        />

        <Input
          label={'Cep'}
          id={'cep'}
          value={cep}
          setValue={setCep}
          required
        />
      </form>
    </>
  );
};
