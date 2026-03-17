import { useParams } from 'react-router-dom';
import { useOrder } from '@/hooks/orders';
import { SEO } from '../../../components/shared/SEO';
import { LoadingState } from '../../../components/ui/LoadingState';
import { ErrorState } from '@/components/ui/ErrorState';
import { OrderDetails } from '../../../components/ui/OrderDetails';
import styles from './OrderDetailsPage.module.css';

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const { isLoading, error, data } = useOrder(orderId);

  let content;
  if (isLoading) content = <LoadingState />;
  else if (error) content = <ErrorState message={error} />;
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
