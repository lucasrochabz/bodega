import { useEffect } from 'react';
import { useFetch } from '../../hooks';
import { usersService } from '../../services/usersService';
import { Head } from '../../components/common/Head';
import { Loading } from '../../components/ui/Loading';
import { UserUpdateForm } from '../../components/forms/UserUpdateForm';

const UserInfoPage = () => {
  const { request, loading, results } = useFetch();

  useEffect(() => {
    usersService.getUser(request);
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
