import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { BASE_API_URL } from '../../../config';
import './LoginForm.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { statusUser, login, logout } = useContext(UserContext);
  const inputElement = useRef(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const verifyUser = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${BASE_API_URL}/auths/login`, {
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
      login(results.data.id);
      navigate('/minha-conta');
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      alert(`Erro ao fazer login: ${error.message}`);
    }
  };

  return (
    <div className="login-field">
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

        <button className="btn-login-form">
          {statusUser ? 'Sair' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};
