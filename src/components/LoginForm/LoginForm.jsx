import { useEffect, useRef, useState } from 'react';
import { InputField } from '../InputField/InputField';
import './LoginForm.css';

export const LoginForm = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const inputElement = useRef(null);

  // teste => função para fazer o login
  const getUser = () => {
    console.log('clicou em teste');

    window.localStorage.setItem('login', 'login_teste');
    window.localStorage.setItem('senha', '123456');
  };

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <div className="login-field">
      <h1 className="default-title">Login</h1>
      <InputField
        name={'email-login'}
        label={'Email'}
        type={'email'}
        ref={inputElement}
      />

      <InputField name={'senha-login'} label={'Senha'} type={'password'} />
      <button onClick={getUser}>Entrar</button>
    </div>
  );
};
