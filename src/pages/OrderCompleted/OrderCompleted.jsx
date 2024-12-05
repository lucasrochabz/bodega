import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLoading } from '../../hooks';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { OrderList } from '../../components/OrderList';
import './OrderCompleted.css';

export const OrderCompleted = () => {
  const { orderId } = useParams();

  const { startLoading, stopLoading, loading } = useLoading();

  const [order, setOrder] = useState({});

  const getOrder = async () => {
    startLoading();
    try {
      const response = await fetch(`http://localhost:4000/orders/${orderId}`);
      const results = await response.json();
      setOrder(results.data);
      stopLoading();
    } catch (error) {
      console.error('Erro ao buscar pedido:' + error);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      <Header />
      {loading ? 'Carregando' : <OrderList order={order} />}
      <Footer />
    </div>
  );
};
