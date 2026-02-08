import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { Head } from '../../../components/shared/Head';
import { UserUpdateForm } from '../../../components/forms/UserUpdateForm';

const UserInfoPage = () => {
  const { loading, data } = useContext(UserContext);

  if (loading) return <div>Carregando...</div>;
  if (!data) return null;
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
