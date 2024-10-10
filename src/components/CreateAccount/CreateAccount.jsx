import { useState } from 'react';
import './CreateAccount.css';

export const CreateAccount = () => {
  const [dataCep, setDataCep] = useState({});

  const handleCep = (event) => {
    const cepValue = event.target.value;

    if (cepValue.length === 8) {
      getCep(cepValue);
    }
  };

  const getCep = async (cep) => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dataCeps = await response.json();
    console.log(dataCeps);
    setDataCep(dataCeps);
  };

  const handleButton = (event) => {
    event.preventDefault();

    // isso aqui pode ser melhorado
    const cepInput = document.getElementById('cep').value;
    if (cepInput.length < 8) {
      alert('cep invalido');
    }
  };

  const inputs = [
    {
      label: 'Nome',
      id: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Digite seu nome',
    },
    {
      label: 'Email',
      id: 'email',
      name: 'email',
      type: 'text',
      placeholder: 'Digite seu email',
    },
    {
      label: 'Senha',
      id: 'senha',
      name: 'senha',
      type: 'text',
      placeholder: 'Digite sua senha',
    },
    {
      label: 'Cep',
      id: 'cep',
      name: 'cep',
      type: 'text',
      placeholder: 'Digite seu cep',
    },
    {
      label: 'Rua',
      id: 'rua',
      name: 'rua',
      type: 'text',
      // placeholder: 'Digite seu rua',
      atributo: 'readOnly',
    },
    {
      label: 'Número',
      id: 'numero',
      name: 'numero',
      type: 'text',
      placeholder: 'Digite seu número',
    },
    {
      label: 'Bairro',
      id: 'bairro',
      name: 'bairro',
      type: 'text',
      // placeholder: 'Digite seu bairro',
      atributo: 'readOnly',
    },
    {
      label: 'Cidade',
      id: 'cidade',
      name: 'cidade',
      type: 'text',
      // placeholder: 'Digite seu Cidade',
      atributo: 'readOnly',
    },
    {
      label: 'Estado',
      id: 'estado',
      name: 'estado',
      type: 'text',
      // placeholder: 'Digite seu estado',
      atributo: 'readOnly',
    },
  ];

  return (
    <div className="create-account">
      {inputs.map((input) => (
        <div key={input.name} className="input-item">
          <label htmlFor={input.name}>{input.label}</label>
          <input
            type={input.type}
            id={input.id}
            name={input.name}
            placeholder={input.placeholder}
            readOnly={input.atributo === 'readOnly'}
          />
        </div>
      ))}

      {/* <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" name="nome" />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" />

      <label htmlFor="senha">Senha</label>
      <input type="text" id="senha" name="senha" />

      <label htmlFor="cep">Cep</label>
      <input onChange={handleCep} type="text" id="cep" name="cep" />

      <label htmlFor="rua">Rua</label>
      <input
        type="text"
        id="rua"
        name="rua"
        value={dataCep.logradouro || ''}
        readOnly
      />

      <label htmlFor="numero">Número</label>
      <input type="number" id="numero" name="numero" />

      <label htmlFor="bairro">Bairro</label>
      <input type="text" id="bairro" name="bairro" readOnly />

      <label htmlFor="cidade">Cidade</label>
      <input
        type="text"
        id="cidade"
        name="cidade"
        value={dataCep.localidade || ''}
        readOnly
      />

      <label htmlFor="estado">Estado</label>
      <input
        type="text"
        id="estado"
        name="estado"
        value={dataCep.estado || ''}
        readOnly
      /> */}

      <button onClick={handleButton}>Criar conta</button>
    </div>
  );
};
