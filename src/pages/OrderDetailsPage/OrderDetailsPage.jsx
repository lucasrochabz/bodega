import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GET_ORDER_ID } from '../../api/orders';
import { useFetch } from '../../hooks';
import { Head } from '../../components/Head';
import { OrderDetails } from '../../components/OrderDetails';
import { Loading } from '../../components/Loading';
import './OrderDetailsPage.css';

export const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const { request, loading, data, error } = useFetch();

  const getOrder = async () => {
    const { url, options } = GET_ORDER_ID(orderId);
    request(url, options);
  };

  useEffect(() => {
    getOrder();
  }, [orderId]);

  return (
    <>
      <Head title="Pedidos" description="Descrição da página Pedidos" />
      {loading || !data ? (
        <Loading />
      ) : (
        <article className="order-details-container">
          <OrderDetails order={data} />
        </article>
      )}
    </>
  );
};
