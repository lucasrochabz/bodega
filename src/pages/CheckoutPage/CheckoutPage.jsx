import { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { useLoading } from '../../hooks';
import { GET_ORDER_ID } from '../../utils/apiUtils';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { CheckoutForm } from '../../components/CheckoutForm';
import { OrderSummary } from '../../components/OrderSummary';
import { Footer } from '../../components/Footer';
import './CheckoutPage.css';

export const CheckoutPage = () => {
  const { data, login } = useContext(UserContext);
  const { orderId } = useParams();
  const { loading, startLoading, stopLoading } = useLoading();
  const [orderData, setOrderData] = useState(null);

  const getOrder = async () => {
    startLoading();
    try {
      const { url, options } = GET_ORDER_ID(orderId);
      const response = await fetch(url, options);

      const results = await response.json();
      setOrderData(results.data);
    } catch (error) {
      console.error('erro na requisição.');
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    if (login) {
      getOrder();
    }
  }, []);

  if (!login) return <Navigate to={'/'} />;
  return (
    <>
      <Head title="Checkout" description="Descrição da página Checkout" />
      <Header />
      <h2 className="default-title">Finalizar Compra</h2>

      {loading || !data || !orderData ? (
        <Loading />
      ) : (
        <main className="checkout-page">
          <CheckoutForm userData={data} orderData={orderData} />
          <OrderSummary orderData={orderData} />
        </main>
      )}

      <Footer />
    </>
  );
};
