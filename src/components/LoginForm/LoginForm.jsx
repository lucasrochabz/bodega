import { useEffect, useRef } from 'react';
import { InputField } from '../../components/InputField/InputField';
import './LoginForm.css';

export const LoginForm = () => {
  const inputElement = useRef();

  useEffect(() => {
    inputElement.current.focus(null);
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
      <button>Entrar</button>
    </div>
  );
};
