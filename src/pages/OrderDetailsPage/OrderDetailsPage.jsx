import { useParams } from 'react-router-dom';
import useOrder from '../../hooks/orders/useOrder';
import { Head } from '../../components/shared/Head';
import { OrderDetails } from '../../components/ui/OrderDetails';
import styles from './OrderDetailsPage.module.css';

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const { data, loading, error } = useOrder(orderId);

  if (loading || !data) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      <Head title="Pedidos" description="Descrição da página Pedidos" />

      <article className={`${styles.container} anim-show-left`}>
        <OrderDetails order={data} />
      </article>
    </>
  );
};

export default OrderDetailsPage;
