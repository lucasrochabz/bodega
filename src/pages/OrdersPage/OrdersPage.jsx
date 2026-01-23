import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks';
import { ordersService } from '../../services/ordersService';
import { Head } from '../../components/shared/Head';
import { Loading } from '../../components/ui/Loading';
import { OrderList } from '../../components/ui/OrderList';
import styles from './OrdersPage.module.css';

const OrdersPage = () => {
  const { request, loading, results, error } = useFetch();
  const [search, setSearch] = useState('');

  const allOrders = results?.data || [];
  const filtredOrders = allOrders.filter((item) =>
    item.id.toString().includes(search),
  );

  const ordersToShow = search ? filtredOrders : allOrders;

  useEffect(() => {
    ordersService.getOrders(request);
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <div>Erro: {error}</div>;
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
      <section className={`${styles.orders} anim-show-left`}>
        {ordersToShow.length === 0 ? (
          <div>Nenhum pedido encontrado.</div>
        ) : (
          <OrderList orders={ordersToShow} />
        )}
      </section>
    </>
  );
};

export default OrdersPage;
