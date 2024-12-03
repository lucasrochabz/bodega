import { useEffect, useRef } from 'react';
import { InputField } from '../InputField';
import { RequestButton } from '../RequestButton/RequestButton';
import './LoginForm.css';

export const LoginForm = () => {
  const inputElement = useRef(null);

  const inputLogin = [
    {
      name: 'email-login',
      label: 'Email',
      type: 'email',
      ref: inputElement,
    },
    {
      name: 'password-login',
      label: 'Password',
      type: 'password',
    },
  ];

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const requestApi = async () => {
    try {
      const response = await fetch('http://localhost:4000/auths/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'lucas@email.com',
          password: '123456',
        }),
      });

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      console.log(results);
    } catch (error) {
      console.error('Erro na requisição: ', error.message);
      alert(`Erro ao fazer login: ${error.message}`);
    }
  };

  return (
    <div className="login-field">
      <h1 className="default-title">Login</h1>

      {inputLogin.map((input) => (
        <InputField
          key={input.name}
          name={input.name}
          label={input.label}
          type={input.type}
          ref={input.ref}
        />
      ))}

      <RequestButton handleClick={requestApi} text="Request" />
    </div>
  );
};
