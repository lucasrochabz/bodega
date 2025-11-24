import { useEffect } from 'react';
import { useFetch } from '../../hooks';
import { GET_USER } from '../../api/users';
import { Head } from '../../components/common/Head';
import { Loading } from '../../components/ui/Loading';
import { UserUpdateForm } from '../../components/forms/UserUpdateForm';

const UserInfoPage = () => {
  const { request, loading, results } = useFetch();

  useEffect(() => {
    const getDataUser = async () => {
      const token = localStorage.getItem('token');

      const { url, options } = GET_USER(token);
      request(url, options);
    };

    getDataUser();
  }, [request]);

  return (
    <>
      <Head
        title="Informações"
        description="Descrição da página Minhas Informações"
      />
      {loading || !results?.data ? (
        <Loading />
      ) : (
        <UserUpdateForm data={results.data} />
      )}
    </>
  );
};

export default UserInfoPage;
