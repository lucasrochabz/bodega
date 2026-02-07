import { useState } from 'react';
import useOrders from '../../hooks/useOrders';
import { Head } from '../../components/shared/Head';
import { OrderList } from '../../components/ui/OrderList';
import styles from './OrdersPage.module.css';

const OrdersPage = () => {
  const { data, loading, error } = useOrders();
  const [search, setSearch] = useState('');

  const allOrders = data || [];
  const filtredOrders = allOrders.filter((item) =>
    item.id.toString().includes(search),
  );

  const ordersToShow = search ? filtredOrders : allOrders;

  if (loading) return <div>Carregando...</div>;
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
