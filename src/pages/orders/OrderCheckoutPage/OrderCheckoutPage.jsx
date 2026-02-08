import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import useOrder from '../../../hooks/orders/useOrder';
import { Head } from '../../../components/shared/Head';
import { Header } from '../../../components/layout/Header';
import { Loading } from '../../../components/ui/Loading';
import { CheckoutForm } from '../../../components/forms/CheckoutForm';
import { OrderSummary } from '../../../components/ui/OrderSummary';
import { Footer } from '../../../components/layout/Footer';
import styles from './OrderCheckoutPage.module.css';

const OrderCheckoutPage = () => {
  const { data: userData } = useContext(AuthContext);
  const { orderId } = useParams();

  const { isLoading, error, data: orderData } = useOrder(orderId);

  if (isLoading || !userData || !orderData) return <Loading />;
  if (error) return <div>{error}</div>;
  return (
    <>
      <Head title="Checkout" description="Descrição da página Checkout" />
      <Header />
      <h2 className="title">Finalizar Compra</h2>

      <main className={styles.checkout}>
        <CheckoutForm userData={userData} />
        <OrderSummary orderData={orderData} />
      </main>

      <Footer />
    </>
  );
};

export default OrderCheckoutPage;
