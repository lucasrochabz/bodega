import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { useFetch } from '../../hooks';
import { GET_ORDER_ID } from '../../helpers/apiHelper';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { CheckoutForm } from '../../components/CheckoutForm';
import { OrderSummary } from '../../components/OrderSummary';
import { Footer } from '../../components/Footer';
import './CheckoutPage.css';

export const CheckoutPage = () => {
  const { data } = useContext(UserContext);
  const { orderId } = useParams();
  const { request, loading, data: orderData, error } = useFetch();

  const getOrder = async () => {
    const { url, options } = GET_ORDER_ID(orderId);
    request(url, options);
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <>
      <Head title="Checkout" description="Descrição da página Checkout" />
      <Header />
      <h2 className="title">Finalizar Compra</h2>

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
