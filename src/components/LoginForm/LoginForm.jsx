import { useEffect, useRef } from 'react';
import { InputField } from '../InputField';
import { ButtonRequest } from '../ButtonRequest';
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
  const handleLogin = () => {
    console.log('clicou no botão Entrar');
    window.localStorage.setItem('auth', 'Está conectado');
  };

  useEffect(() => {
    inputElement.current.focus();
    isConnected();
  }, []);

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

      <ButtonRequest text="Entrar" handleClick={handleLogin} />
    </div>
  );
};
