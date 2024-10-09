import { Header } from '../../components/Header/Header';
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <div>
      <Header />
      <p>LoginPage</p>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" />

      <label htmlFor="senha">Senha</label>
      <input type="text" id="senha" name="senha" />

      <button>Entrar</button>
    </div>
  );
};
