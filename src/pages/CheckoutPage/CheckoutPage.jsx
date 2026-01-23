import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { useFetch } from '../../hooks';
import { Head } from '../../components/shared/Head';
import { Header } from '../../components/layout/Header';
import { Loading } from '../../components/ui/Loading';
import { CheckoutForm } from '../../components/forms/CheckoutForm';
import { OrderSummary } from '../../components/ui/OrderSummary';
import { Footer } from '../../components/layout/Footer';
import styles from './CheckoutPage.module.css';
import { ordersService } from '../../services/ordersService';

const CheckoutPage = () => {
  const { data } = useContext(UserContext);
  const { orderId } = useParams();
  const { loading, request, results } = useFetch();

  useEffect(() => {
    ordersService.getOrder({ orderId, request });
  }, [orderId, request]);

  if (loading || !data || !results?.data) return <Loading />;
  return (
    <>
      <Head title="Checkout" description="Descrição da página Checkout" />
      <Header />
      <h2 className="title">Finalizar Compra</h2>

      <main className={styles.checkout}>
        <CheckoutForm userData={data} orderData={results.data} />
        <OrderSummary orderData={results.data} />
      </main>

      <Footer />
    </>
  );
};

export default CheckoutPage;
