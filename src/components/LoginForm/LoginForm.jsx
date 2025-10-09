import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { ROUTES } from '../../routes/paths';
import { Button } from '../Button';
import './LoginForm.css';

const LoginForm = () => {
  const { userLogin, loading } = useContext(UserContext);
  const inputElement = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateInput = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      console.log('os campos estão vazios');
      return false;
    } else {
      console.log('Login feito');
      return true;
    }
  };

  const verifyUser = async (event) => {
    event.preventDefault();

    await userLogin(email, password);
  };

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <section className="login-field">
      <h1 className="default-title">Login</h1>

      <form className="login-form" onSubmit={verifyUser}>
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={inputElement}
          required
        />

        <label htmlFor="login-password">Senha</label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="primary" disabled={loading}>
          {loading ? 'Aguarde...' : 'Entrar'}
        </Button>
      </form>

      <Link to={ROUTES.FORGOT_PASSWORD} style={{ padding: '1rem 0' }}>
        Perdeu a senha?
      </Link>

      <Link to={ROUTES.REGISTER} className="btn-signup-form">
        Criar conta
      </Link>
    </section>
  );
};

export default LoginForm;
