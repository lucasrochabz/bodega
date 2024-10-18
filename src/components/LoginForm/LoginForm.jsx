import { InputField } from '../../components/InputField/InputField';
import './LoginForm.css';

export const LoginForm = () => {
  return (
    <div className="login-field">
      <InputField label={'email'} name={'Email'} />
      <InputField label={'senha'} name={'Senha'} />
      <button>Entrar</button>
    </div>
  );
};
