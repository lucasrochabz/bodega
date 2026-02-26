import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { Head } from '../../../components/shared/Head';
import { Loading } from '../../../components/ui/Loading';
import { UserUpdateForm } from '../../../components/forms/UserUpdateForm';

const UserInfoPage = () => {
  const { loading, data } = useContext(AuthContext);

  let content;
  if (loading) content = <Loading />;
  else if (!data) content = <div>Informações do usuário não encontradas.</div>;
  else {
    content = <UserUpdateForm data={data} />;
  }

  return (
    <>
      <Head
        title="Informações"
        description="Descrição da página Minhas Informações"
      />
      {content}
    </>
  );
};

export default UserInfoPage;
