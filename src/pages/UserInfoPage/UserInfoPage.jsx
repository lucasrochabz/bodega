import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { useFetch } from '../../hooks';
import { GET_USER } from '../../helpers/apiHelper';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import { UserUpdateForm } from '../../components/UserUpdateForm';

export const UserInfoPage = () => {
  const { login } = useContext(UserContext);

  const [url, setUrl] = useState('');
  const [options, setOptions] = useState(null);
  const { loading, data, error } = useFetch(url, options);

  const getDataUser = async () => {
    const token = localStorage.getItem('token');

    const { url, options } = GET_USER(token);
    setUrl(url);
    setOptions(options);
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
      {loading || !data ? <Loading /> : <UserUpdateForm dados={data} />}
    </>
  );
};
