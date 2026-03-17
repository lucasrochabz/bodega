import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '@/contexts/UserContext';
import { useOrder } from '@/hooks/orders';
import { MainLayout } from '@/components/layout/MainLayout';
import { LoadingState } from '../../../components/ui/LoadingState';
import { CheckoutForm } from '../../../components/forms/CheckoutForm';
import { OrderSummary } from '../../../components/ui/OrderSummary';
import styles from './OrderCheckoutPage.module.css';

const OrderCheckoutPage = () => {
  const { data: userData } = useContext(UserContext);
  const { orderId } = useParams();

  const { isLoading, error, data: orderData } = useOrder(orderId);

  let content;
  if (isLoading) content = <LoadingState />;
  else if (error) content = <div>{error}</div>;
  else if (!userData) content = <div>Dados do usuário não encontrado</div>;
  else if (!orderData) content = <div>Dados do pedido não encontrado</div>;
  else {
    content = (
      <div className={styles.checkout}>
        <CheckoutForm userData={userData} />
        <OrderSummary orderData={orderData} />
      </div>
    );
  }

  return (
    <MainLayout title="Checkout">
      <h2 className="title">Finalizar Compra</h2>
      {content}
    </MainLayout>
  );
};

export default OrderCheckoutPage;
