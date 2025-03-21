import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_ORDER_ID } from '../../helpers/apiHelper';
import { useLoading } from '../../hooks';
import { Head } from '../../components/Head';
import { OrderDetails } from '../../components/OrderDetails';
import { Loading } from '../../components/Loading';
import './OrderDetailsPage.css';

export const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const { loading, startLoading, stopLoading } = useLoading();

  const [order, setOrder] = useState(null);

  const getOrder = async () => {
    startLoading();
    try {
      const { url, options } = GET_ORDER_ID(orderId);
      const response = await fetch(url, options);

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      setOrder(results.data);
    } catch (error) {
      console.error('Erro ao buscar detalhes do pedido:', error.message);
      alert(`Erro ao buscar detalhes do pedido: ${error.message}`);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    getOrder();
  }, [orderId]);

  return (
    <>
      <Head title="Pedidos" description="Descrição da página Pedidos" />
      {loading || !order ? (
        <Loading />
      ) : (
        <article className="order-details-container">
          <OrderDetails order={order} />
        </article>
      )}
    </>
  );
};
