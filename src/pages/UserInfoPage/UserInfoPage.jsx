import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Head } from '../../components/shared/Head';
import { UserUpdateForm } from '../../components/forms/UserUpdateForm';

const UserInfoPage = () => {
  const { data, loading } = useContext(UserContext);

  if (loading || !data) return <div>Carregando...</div>;
  return (
    <>
      <Head
        title="Informações"
        description="Descrição da página Minhas Informações"
      />
      <UserUpdateForm data={data} />
    </>
  );
};

export default UserInfoPage;
