import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_API_URL } from '../../../config';
import { useLoading } from '../../hooks';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
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
      const response = await fetch(`${BASE_API_URL}/orders/details/${orderId}`);

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      setOrder(results.data);
    } catch (error) {
      console.error('Erro na requisição:', error.message);
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

      <Header />
      <div className="order-container-teste">
        {loading || !order ? <Loading /> : <OrderDetails order={order} />}
      </div>
      <Footer />
    </>
  );
};
