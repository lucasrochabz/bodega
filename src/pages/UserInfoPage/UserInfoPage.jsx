import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
// import { useFetch } from '../../hooks';
// import { authService } from '../../services/authService';
import { Head } from '../../components/shared/Head';
import { Loading } from '../../components/ui/Loading';
import { UserUpdateForm } from '../../components/forms/UserUpdateForm';

const UserInfoPage = () => {
  const { data, loading } = useContext(UserContext);

  // fix: apagar isso daqui e de outras páginas que fazem parecido
  // const { request, loading, results } = useFetch();

  // useEffect(() => {
  //   authService.getMe(request);
  // }, [request]);

  return (
    <>
      <Head
        title="Informações"
        description="Descrição da página Minhas Informações"
      />
      {loading || !data ? <Loading /> : <UserUpdateForm data={data} />}
    </>
  );
};

export default UserInfoPage;
