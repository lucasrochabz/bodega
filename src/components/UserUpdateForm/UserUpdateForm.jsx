import { useState, useEffect } from 'react';
import { Input } from '../Input';
import './UserUpdateForm.css';

export const UserUpdateForm = ({ dados }) => {
  const [name, setName] = useState(dados.name);
  const [email, setEmail] = useState(dados.email);
  const [password, setPassword] = useState('');
  const [zipCode, setZipCode] = useState(dados.zip_code);
  const [endereco, setEndereco] = useState(dados.street);
  const [numero, setNumero] = useState(dados.number);
  const [bairro, setBairro] = useState(dados.neighborhood);
  const [cidade, setCidade] = useState(dados.city);
  const [estado, setEstado] = useState(dados.state);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('clicou em atualizar');
  };

  useEffect(() => {
    getCep();
  }, [zipCode]);

  return (
    <article className="user-info-page">
      <h1>Minhas informações</h1>
      <div className="user-update" onSubmit={handleSubmit}>
        <form className="update">
          <Input
            type="text"
            label="Nome"
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

          <button className="btn-update">Atualizar</button>
        </form>
      </div>
    </article>
  );
};
