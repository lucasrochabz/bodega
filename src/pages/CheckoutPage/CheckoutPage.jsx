import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import useOrder from '../../hooks/orders/useOrder';
import { Head } from '../../components/shared/Head';
import { Header } from '../../components/layout/Header';
import { Loading } from '../../components/ui/Loading';
import { CheckoutForm } from '../../components/forms/CheckoutForm';
import { OrderSummary } from '../../components/ui/OrderSummary';
import { Footer } from '../../components/layout/Footer';
import styles from './CheckoutPage.module.css';

const CheckoutPage = () => {
  const { data: userData } = useContext(UserContext);
  const { orderId } = useParams();

  const { loading, error, data: orderData } = useOrder(orderId);

  if (loading || !userData || !orderData) return <Loading />;
  if (error) return <div>{error}</div>;
  return (
    <>
      <Head title="Checkout" description="Descrição da página Checkout" />
      <Header />
      <h2 className="title">Finalizar Compra</h2>

      <main className={styles.checkout}>
        <CheckoutForm userData={userData} orderData={orderData} />
        <OrderSummary orderData={orderData} />
      </main>

      <Footer />
    </>
  );
};

export default CheckoutPage;
