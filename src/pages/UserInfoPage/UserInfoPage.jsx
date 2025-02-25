import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../hooks';
import { BASE_API_URL } from '../../../config';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import './UserInfoPage.css';

export const UserInfoPage = () => {
  const navigate = useNavigate();
  const { loading, startLoading, stopLoading } = useLoading();

  const [user, setUser] = useState(null);

  const getDataUser = async (token) => {
    startLoading();
    try {
      const response = await fetch(`${BASE_API_URL}/users/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      setUser(results.data);
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      alert(`Erro ao buscar detalhes do usuário: ${error.message}`);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    getDataUser(token);
  }, []);

  return (
    <>
      <Head
        title="Informações"
        description="Descrição da página Minhas Informações"
      />
      {loading || !user ? (
        <Loading />
      ) : (
        <article className="user-info-page">
          <h1>Minhas informações</h1>

          <ul className="user-info-card">
            <li className="list-top">Dados de acesso</li>

            <li>
              Email: <span>{user.email}</span>
            </li>

            <li>
              Senha: <span>******</span>
            </li>
          </ul>

          <ul className="user-info-card">
            <li className="list-top">Dados pessoais</li>
            <li>
              Nome: <span>{user.name}</span>
            </li>
            <li>
              Endereço: <span>{user.street}</span>
            </li>
            <li>
              Número: <span>{user.number}</span>
            </li>
            <li>
              Bairro: <span>{user.neighborhood}</span>
            </li>
            <li>
              Cidade: <span>{user.city}</span>
            </li>
            <li>
              Estado: <span>{user.state}</span>
            </li>
            <li>
              CEP: <span>{user.zip_code}</span>
            </li>
          </ul>
        </article>
      )}
    </>
  );
};
