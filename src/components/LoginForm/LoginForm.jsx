import { useEffect, useRef, useState } from 'react';
import { InputField } from '../InputField/InputField';
import { ButtonRequest } from '../ButtonRequest/ButtonRequest';
import './LoginForm.css';

export const LoginForm = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

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
      label: 'password',
      type: 'password',
    },
  ];

  // teste => função para fazer o login
  // teste função tem que passar para o componente buttuonrequest
  const getUser = () => {
    alert('fez o login');

    // window.localStorage.setItem('login', 'login_teste');
    // window.localStorage.setItem('senha', '123456');
  };

  useEffect(() => {
    inputElement.current.focus();
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

      <ButtonRequest text="Entrar" />
    </div>
  );
};
