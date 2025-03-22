import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { GET_ORDERS_USER } from '../../helpers/apiHelper';
import { useFetch } from '../../hooks';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import { OrderList } from '../../components/OrderList';
import './OrdersPage.css';

export const OrdersPage = () => {
  const { login } = useContext(UserContext);

  const [url, setUrl] = useState('');
  const [options, setOptions] = useState(null);
  const { loading, data, error } = useFetch(url, options);

  const getOrders = async () => {
    const token = localStorage.getItem('token');

    const { url, options } = GET_ORDERS_USER(token);
    setUrl(url);
    setOptions(options);
  };

  useEffect(() => {
    getOrders();
  }, []);

  if (!login) return <Navigate to={'/login'} />;
  return (
    <>
      <Head title="Pedidos" description="Descrição da página Pedidos" />
      {loading || !data ? (
        <Loading />
      ) : (
        <article className="orders-page">
          <OrderList orders={data} />
        </article>
      )}
    </>
  );
};
