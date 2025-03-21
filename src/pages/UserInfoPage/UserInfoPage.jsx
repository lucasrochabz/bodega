import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { useLoading } from '../../hooks';
import { GET_USER } from '../../helpers/apiHelper';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import { UserUpdateForm } from '../../components/UserUpdateForm';

export const UserInfoPage = () => {
  const { login } = useContext(UserContext);
  const { loading, startLoading, stopLoading } = useLoading();

  const [user, setUser] = useState(null);

  const getDataUser = async () => {
    const token = localStorage.getItem('token');

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
      console.error('Erro ao buscar detalhes do usuário:', error.message);
      alert(`Erro ao buscar detalhes do usuário: ${error.message}`);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    getDataUser();
  }, []);

  if (!login) return <Navigate to={'/login'} />;
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
