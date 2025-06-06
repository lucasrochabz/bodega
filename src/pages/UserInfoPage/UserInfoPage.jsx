import { useEffect } from 'react';
import { useFetch } from '../../hooks';
import { GET_USER } from '../../api/users';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import { UserUpdateForm } from '../../components/UserUpdateForm';

const UserInfoPage = () => {
  const { request, loading, data, error } = useFetch();

  const getDataUser = async () => {
    const token = localStorage.getItem('token');

    const { url, options } = GET_USER(token);
    request(url, options);
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <>
      <Head
        title="Informações"
        description="Descrição da página Minhas Informações"
      />
      {loading || !data ? <Loading /> : <UserUpdateForm dados={data} />}
    </>
  );
};

export default UserInfoPage;
