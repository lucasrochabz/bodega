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

  // teste auth
  const isConnected = () => {
    const getAuth = window.localStorage.getItem('auth');
    console.log('A chave existe no localStorage?', getAuth);

    if (getAuth) {
      console.log('sim');
    } else {
      console.log('não');
    }
  };

  //teste
  // const handleLogin = () => {
  //   console.log('clicou no botão Entrar');
  //   window.localStorage.setItem('auth', 'Está conectado');
  // };

  useEffect(() => {
    inputElement.current.focus();
    isConnected();
  }, []);

  const requestApi = async () => {
    const response = await fetch('http://localhost:4000/auths/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'lucas@email.com',
        password: '123456',
      }),
    });

    const results = await response.json();
    console.log(results);
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
