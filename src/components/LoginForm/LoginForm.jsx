import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { BASE_API_URL } from '../../../config';
import './LoginForm.css';
import { Button } from '../Button';

export const LoginForm = () => {
  const { userName, login } = useContext(UserContext);
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

    try {
      const response = await fetch(`${BASE_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

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

        <Button className="btn-login-form">
          {userName ? 'Sair' : 'Entrar'}
        </Button>
      </form>
    </section>
  );
};
