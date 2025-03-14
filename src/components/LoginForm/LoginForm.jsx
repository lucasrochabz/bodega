import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Button } from '../Button';
import './LoginForm.css';

export const LoginForm = () => {
  const { userLogin, login, loading } = useContext(UserContext);
  const inputElement = useRef(null);
  const navigate = useNavigate();

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

    userLogin(email, password);
    navigate('/');
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
          {login ? 'Sair' : 'Entrar'}
        </Button>
      </form>
    </section>
  );
};
