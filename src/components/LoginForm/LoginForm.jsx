import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { BASE_API_URL } from '../../../config';
import { RequestButton } from '../RequestButton/RequestButton';
import './LoginForm.css';

export const LoginForm = () => {
  const { isLoggedIn, login, logout } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputElement = useRef(null);

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  // const requestApi = async () => {
  //   try {
  //     const response = await fetch(`${BASE_API_URL}/auths/login`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         email: 'lucas@email.com',
  //         password: '123456',
  //       }),
  //     });

  //     if (!response.ok) {
  //       const results = await response.json();
  //       throw new Error(results.message);
  //     }

  //     const results = await response.json();
  //     console.log(results);
  //   } catch (error) {
  //     console.error('Erro na requisição:', error.message);
  //     alert(`Erro ao fazer login: ${error.message}`);
  //   }
  // };

  return (
    <div className="login-field">
      <h1 className="default-title">Login</h1>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        ref={inputElement}
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <RequestButton
        handleClick={isLoggedIn ? logout : login}
        text={isLoggedIn ? 'Sair' : 'Entrar'}
      />
    </div>
  );
};
