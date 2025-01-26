import { useEffect, useState } from 'react';
import { useLoading } from '../../hooks';
import { BASE_API_URL } from '../../../config';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import './MyInfoPage.css';

export const MyInfoPage = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [user, setUser] = useState(null);

  const getLocalStorage = () => {
    const userStorage = localStorage.getItem('user');
    return userStorage;
  };

  const getUser = async (userId) => {
    startLoading();
    try {
      const response = await fetch(`${BASE_API_URL}/users/${userId}`);

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
    const userId = getLocalStorage();
    if (!userId) {
      return navigate('/login');
    }
    getUser(userId);
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
            <span>Email</span>
            <p>{user.email}</p>
            <span>Senha</span>
            <p>******</p>
          </div>
          <div className="my-info-card">
            <h3>Dados pessoais</h3>

            <span>Nome</span>
            <p>{user.name}</p>

            <span>Endereço</span>
            <p>{user.street}</p>

            <span>Bairro</span>
            <p>{user.neighborhood}</p>

            <span>Cidade</span>
            <p>{user.city}</p>
          </div>
        </article>
      )}
    </>
  );
};
