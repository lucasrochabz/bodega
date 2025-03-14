import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../hooks';
import { GET_USER } from '../../utils/apiUtils';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import { UserUpdateForm } from '../../components/UserUpdateForm';

export const UserInfoPage = () => {
  const navigate = useNavigate();
  const { loading, startLoading, stopLoading } = useLoading();

  const [user, setUser] = useState(null);

  const getDataUser = async (token) => {
    startLoading();
    try {
      const { url, options } = GET_USER(token);
      const response = await fetch(url, options);

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
      {loading || !user ? <Loading /> : <UserUpdateForm dados={user} />}
    </>
  );
};
