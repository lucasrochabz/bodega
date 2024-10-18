const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputs = [
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
      name: 'password',
      type: 'password',
      placeholder: 'Digite sua senha',
    },
  ];

  return (
    <div>
      {inputs.map((input) => (
        <InputField
          key={input.name}
          label={input.label}
          name={input.name}
          value={formData[input.name]}
          onChange={handleChange}
          type={input.type}
          placeholder={input.placeholder}
        />
      ))}
    </div>
  );
};

import React from 'react';

const InputField = ({ label, value, onChange, type = 'text', placeholder }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;

return (
  <div className="create-account">
    {inputs.map((input) => (
      <>
        <InputField name={input.name} label={input.label} type={input.type} />
      </>
      // <div key={input.name} className="input-item">
      //   <label htmlFor={input.name}>{input.label}</label>
      //   <input
      //     type={input.type}
      //     id={input.id}
      //     name={input.name}
      //     placeholder={input.placeholder}
      //     readOnly={input.atributo === 'readOnly'}
      //   />
      // </div>
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

    {/* <button onClick={handleButton}>Criar conta</button> */}
  </div>
);
