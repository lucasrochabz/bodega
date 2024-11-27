import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { OrderList } from '../../components/OrderList';
import './OrderCompleted.css';

export const OrderCompleted = () => {
  const { orderId } = useParams();

  const [order, setOrder] = useState({});

  const getOrder = async () => {
    const response = await fetch(`http://localhost:4000/orders/${orderId}`);
    const results = await response.json();
    setOrder(results.data);
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      <Header />
      <OrderList order={order} />
      <Footer />
    </div>
  );
};
