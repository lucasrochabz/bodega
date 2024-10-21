import { useState } from 'react';
import { InputField } from '../InputField/InputField';
import { ButtonRequest } from '../ButtonRequest/ButtonRequest';
import './SignUpModal.css';

export const SignUpModal = ({ isModalOpen }) => {
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

    // teste: isso aqui pode ser melhorado
    const cepInput = document.getElementById('cep').value;
    if (cepInput.length < 8) {
      alert('cep invalido');
    }
  };

  const inputList = [
    {
      label: 'Nome',
      name: 'name',
      type: 'text',
      placeholder: 'Digite seu nome',
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Digite seu email',
    },
    {
      label: 'Senha',
      name: 'senha',
      type: 'password',
      placeholder: 'Digite sua senha',
    },
    {
      label: 'Cep',
      name: 'cep',
      type: 'number',
      placeholder: 'Digite seu cep',
      onChange: handleCep,
    },
    {
      label: 'Rua',
      name: 'rua',
      type: 'text',
      attribute: true,
      value: dataCep.logradouro || '',
    },
    {
      label: 'Número',
      name: 'numero',
      type: 'number',
      placeholder: 'Digite seu número',
    },
    {
      label: 'Bairro',
      name: 'bairro',
      type: 'text',
      attribute: true,
      value: dataCep.bairro || '',
    },
    {
      label: 'Cidade',
      name: 'cidade',
      type: 'text',
      attribute: true,
      value: dataCep.localidade || '',
    },
    {
      label: 'Estado',
      name: 'estado',
      type: 'text',
      attribute: true,
      value: dataCep.estado || '',
    },
  ];

  return (
    <div className={isModalOpen ? 'signup' : ''}>
      {inputList.map((input) => (
        <div key={input.name}>
          <InputField
            name={input.name}
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            isReadOnly={input.attribute}
            onChange={input.onChange}
            value={input.value}
          />
        </div>
      ))}

      <ButtonRequest text="Criar" />
    </div>
  );
};
