import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLoading } from '../../hooks';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { OrderList } from '../../components/OrderList';
import './OrderCompleted.css';
import { Loading } from '../../components/Loading/Loading';

export const OrderCompleted = () => {
  const { orderId } = useParams();

  const { startLoading, stopLoading, loading } = useLoading();

  const [order, setOrder] = useState(null);

  const getOrder = async () => {
    startLoading();
    try {
      const response = await fetch(`http://localhost:4000/orders/${orderId}`);

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      setOrder(results.data);
    } catch (error) {
      console.error('Erro na requisição:' + error.message);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    getOrder();
  }, [orderId]);

  return (
    <div>
      <Header />
      {loading ? <Loading /> : order && <OrderList order={order} />}
      <Footer />
    </div>
  );
};
