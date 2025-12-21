import { useEffect, useState } from 'react';
// import { GET_ORDERS_USER } from '../../api/orders';
import { useFetch } from '../../hooks';
import { Head } from '../../components/common/Head';
import { Loading } from '../../components/ui/Loading';
import { OrderList } from '../../components/ui/OrderList';
import styles from './OrdersPage.module.css';
import { ordersService } from '../../services/ordersService';

const OrdersPage = () => {
  const { request, loading, results } = useFetch();
  const [search, setSearch] = useState('');

  const filtredOrders = results?.data.filter((item) =>
    item.id.toString().includes(search),
  );

  const ordersToShow = search ? filtredOrders : results?.data;

  useEffect(() => {
    ordersService.getOrders(request);
  }, [request]);

  return (
    <>
      <Head title="Pedidos" description="Descrição da página Pedidos" />
      <input
        className={styles.search}
        type="search"
        name="search"
        placeholder="Buscar..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {loading || !results?.data ? (
        <Loading />
      ) : (
        <section className={`${styles.orders} anim-show-left`}>
          <OrderList orders={ordersToShow} />
        </section>
      )}
    </>
  );
};

export default OrdersPage;
