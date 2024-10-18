import { InputField } from '../../components/InputField/InputField';
import './LoginForm.css';

export const LoginForm = () => {
  return (
    <div className="login-field">
      <h1 className="login-title">Login</h1>
      <InputField name={'email-login'} label={'Email'} type={'text'} />

      <InputField name={'senha-login'} label={'Senha'} type={'password'} />
      <button>Entrar</button>
    </div>
  );
};
