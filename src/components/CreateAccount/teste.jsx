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
