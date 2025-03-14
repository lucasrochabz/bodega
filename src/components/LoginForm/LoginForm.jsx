import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { POST_LOGIN } from '../../utils/apiUtils';
import { useLoading } from '../../hooks/useLoading';
import { Button } from '../Button';
import './LoginForm.css';

export const LoginForm = () => {
  const { userName, login } = useContext(UserContext);
  const { loading, startLoading, stopLoading } = useLoading();
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

    startLoading();
    try {
      const { url, options } = POST_LOGIN({ email, password });
      const response = await fetch(url, options);

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      login(results);
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      alert(`Erro ao fazer login: ${error.message}`);
    } finally {
      stopLoading();
    }
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
          {userName ? 'Sair' : 'Entrar'}
        </Button>
      </form>
    </section>
  );
};
