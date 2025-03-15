import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { GET_ORDERS_USER } from '../../utils/apiUtils';
import { useLoading } from '../../hooks';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import { OrderList } from '../../components/OrderList';
import './OrdersPage.css';

export const OrdersPage = () => {
  const { login } = useContext(UserContext);
  const { loading, startLoading, stopLoading } = useLoading();

  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const token = localStorage.getItem('token');

    startLoading();
    try {
      const { url, options } = GET_ORDERS_USER(token);
      const response = await fetch(url, options);

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      setOrders(results.data);
    } catch (error) {
      console.error('Erro na requisição');
      alert(`Erro ao buscar pedidos: ${error.message}`);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  if (!login) return <Navigate to={'/login'} />;
  return (
    <>
      <Head title="Pedidos" description="Descrição da página Pedidos" />
      {loading || orders.length === 0 ? (
        <Loading />
      ) : (
        <article className="orders-page">
          <OrderList orders={orders} />
        </article>
      )}
    </>
  );
};
