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

  let content;
  if (isLoading) content = <Loading />;
  else if (error) content = <div>{error}</div>;
  else if (!userData) content = <div>Dados do usuário não encontrado</div>;
  else if (!orderData) content = <div>Dados do pedido não encontrado</div>;
  else {
    content = (
      <>
        <CheckoutForm userData={userData} />
        <OrderSummary orderData={orderData} />
      </>
    );
  }

  return (
    <>
      <Head title="Checkout" description="Descrição da página Checkout" />
      <Header />

      <h2 className="title">Finalizar Compra</h2>
      <main className={styles.checkout}>{content}</main>

      <Footer />
    </>
  );
};

export default OrderCheckoutPage;
