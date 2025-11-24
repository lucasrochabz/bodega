import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';
import { ordersService } from '../../services/ordersService';
import { Head } from '../../components/common/Head';
import { OrderDetails } from '../../components/ui/OrderDetails';
import { Loading } from '../../components/ui/Loading';
import styles from './OrderDetailsPage.module.css';

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const { request, loading, results } = useFetch();

  useEffect(() => {
    ordersService.getOrder({ orderId, request });
  }, [orderId, request]);

  return (
    <>
      <Head title="Pedidos" description="Descrição da página Pedidos" />
      {loading || !results?.data ? (
        <Loading />
      ) : (
        <article className={`${styles.container} anim-show-left`}>
          <OrderDetails order={results.data} />
        </article>
      )}
    </>
  );
};

export default OrderDetailsPage;
