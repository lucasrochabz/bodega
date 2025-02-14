import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../hooks';
import { BASE_API_URL } from '../../../config';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import './MyInfoPage.css';

export const MyInfoPage = () => {
  const navigate = useNavigate();
  const { loading, startLoading, stopLoading } = useLoading();

  const [user, setUser] = useState(null);

  const getLocalStorage = () => {
    const tokenStorage = localStorage.getItem('token');
    return tokenStorage;
  };

  const getUser = async (token) => {
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
    const token = getLocalStorage();
    if (!token) {
      navigate('/login');
      return;
    }
    getUser(token);
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
        <article className="my-info">
          <h2>Minhas informações</h2>
          <div className="my-info-card">
            <h3>Dados de acesso</h3>

            <p>
              Email: <span>{user.email}</span>
            </p>

            <p>
              Senha: <span>******</span>
            </p>
          </div>

          <div className="my-info-card">
            <h3>Dados pessoais</h3>

            <p>
              Nome: <span>{user.name}</span>
            </p>

            <p>
              Endereço: <span>{user.street}</span>
            </p>

            <p>
              Número: <span>{user.number}</span>
            </p>

            <p>
              Bairro: <span>{user.neighborhood}</span>
            </p>

            <p>
              Cidade: <span>{user.city}</span>
            </p>

            <p>
              Estado: <span>{user.state}</span>
            </p>

            <p>
              CEP: <span>{user.zip_code}</span>
            </p>
          </div>
        </article>
      )}
    </>
  );
};
