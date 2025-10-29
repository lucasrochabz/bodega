import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GET_ORDER_ID } from '../../api/orders';
import { useFetch } from '../../hooks';
import { Head } from '../../components/Head';
import { OrderDetails } from '../../components/OrderDetails';
import { Loading } from '../../components/Loading';
import styles from './OrderDetailsPage.module.css';

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const { request, loading, results } = useFetch();

  useEffect(() => {
    const getOrder = async () => {
      const { url, options } = GET_ORDER_ID(orderId);
      request(url, options);
    };

    getOrder();
  }, [orderId, request]);

  return (
    <>
      <Head title="Pedidos" description="Descrição da página Pedidos" />
      {loading || !results?.data ? (
        <Loading />
      ) : (
        <article className={styles.container}>
          <OrderDetails order={results.data} />
        </article>
      )}
    </>
  );
};

export default OrderDetailsPage;
