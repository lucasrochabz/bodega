import { InputField } from '../../components/InputField/InputField';
import './LoginForm.css';

export const LoginForm = () => {
  return (
    <div className="login-field">
      <h1 className="login-title">Login</h1>
      <InputField label={'email-login'} name={'Email'} type={'text'} />

      <InputField label={'senha-login'} name={'Senha'} type={'password'} />
      <button>Entrar</button>
    </div>
  );
};
