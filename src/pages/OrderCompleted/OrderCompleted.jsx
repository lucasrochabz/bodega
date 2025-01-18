import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_API_URL } from '../../../config';
import { useLoading } from '../../hooks';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { OrderList } from '../../components/OrderList';
import { Loading } from '../../components/Loading';
import './OrderCompleted.css';

export const OrderCompleted = () => {
  const { orderId } = useParams();

  const { loading, startLoading, stopLoading } = useLoading();

  const [order, setOrder] = useState(null);

  const getOrder = async () => {
    startLoading();
    try {
      const response = await fetch(`${BASE_API_URL}/orders/${orderId}`);

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
      <Header />
      <div className="order-container-teste">
        {loading || !order ? <Loading /> : <OrderList order={order} />}
      </div>
      <Footer />
    </>
  );
};
