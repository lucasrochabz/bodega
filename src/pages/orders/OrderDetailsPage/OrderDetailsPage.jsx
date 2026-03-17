import { useParams } from 'react-router-dom';
import { useOrder } from '@/hooks/orders';
import { SEO } from '../../../components/shared/SEO';
import { Loading } from '../../../components/ui/Loading';
import { OrderDetails } from '../../../components/ui/OrderDetails';
import styles from './OrderDetailsPage.module.css';

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const { isLoading, error, data } = useOrder(orderId);

  let content;
  if (isLoading) content = <Loading />;
  else if (error) content = <div>{error}</div>;
  else if (!data) content = <div>Pedido não encontrado.</div>;
  else {
    content = <OrderDetails order={data} />;
  }

  return (
    <>
      <SEO title="Pedidos" description="Descrição da página Pedidos" />

      <article className={`${styles.container} anim-show-left`}>
        {content}
      </article>
    </>
  );
};

export default OrderDetailsPage;
