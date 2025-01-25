import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_API_URL } from '../../../config';
import { useLoading } from '../../hooks';
import { Loading } from '../../components/Loading';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { OrdersList } from '../../components/OrdersList/OrdersList';
import './Orders.css';

export const Orders = () => {
  const { userId } = useParams();
  const { loading, startLoading, stopLoading } = useLoading();
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      startLoading();
      const response = await fetch(`${BASE_API_URL}/orders/${userId}`);
      const results = await response.json();
      setOrders(results.data);
    } catch (error) {
      console.error('Erro na requisição');
      alert('Erro ao buscar pedidos');
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <Head title="Pedidos" description="Descrição da página Pedidos" />
      <Header />
      <section className="orders-bgteste">
        {loading || orders.length === 0 ? (
          <Loading />
        ) : (
          <OrdersList orders={orders} />
        )}
      </section>
      <Footer />
    </>
  );
};
