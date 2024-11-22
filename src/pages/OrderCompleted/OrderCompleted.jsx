import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
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
      <h1>Pedido finalizado com sucesso.</h1>
      <h2>Agora é só aguardar...</h2>
      <h2>O seu produto: nome_do_produto</h2>
      <h3>Chegar em 5 dias</h3>
      <h3>No endereço: endereço</h3>
      <Footer />
    </div>
  );
};
