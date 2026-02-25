import { useParams } from 'react-router-dom';
import useOrder from '../../../hooks/orders/useOrder';
import { Head } from '../../../components/shared/Head';
import { OrderDetails } from '../../../components/ui/OrderDetails';
import styles from './OrderDetailsPage.module.css';

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const { isLoading, error, data } = useOrder(orderId);

  let content;
  if (isLoading) content = <div>Carregando...</div>;
  else if (error) content = <div>{error}</div>;
  else if (!data) content = <div>Pedido não encontrado.</div>;
  else {
    content = <OrderDetails order={data} />;
  }

  return (
    <>
      <Head title="Pedidos" description="Descrição da página Pedidos" />

      <article className={`${styles.container} anim-show-left`}>
        {content}
      </article>
    </>
  );
};

export default OrderDetailsPage;
