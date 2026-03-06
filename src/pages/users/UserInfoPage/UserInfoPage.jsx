import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContext';
import { Head } from '../../../components/shared/Head';
import { Loading } from '../../../components/ui/Loading';
import { UserUpdateForm } from '../../../components/forms/UserUpdateForm';

const UserInfoPage = () => {
  const { isLoading, data } = useContext(UserContext);

  let content;
  if (isLoading.getMe) content = <Loading />;
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
