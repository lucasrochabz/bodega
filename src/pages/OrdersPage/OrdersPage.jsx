import { useEffect } from 'react';
import { GET_ORDERS_USER } from '../../helpers/apiHelper';
import { useFetch } from '../../hooks';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import { OrderList } from '../../components/OrderList';
import './OrdersPage.css';

export const OrdersPage = () => {
  const { request, loading, data, error } = useFetch();

  const getOrders = async () => {
    const token = localStorage.getItem('token');

    const { url, options } = GET_ORDERS_USER(token);
    request(url, options);
  };

  useEffect(() => {
    getOrders();
  }, []);

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
