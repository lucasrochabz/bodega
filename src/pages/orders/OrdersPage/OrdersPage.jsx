import { useState } from 'react';
import useOrders from '../../../hooks/orders/useOrders';
import { Head } from '../../../components/shared/Head';
import { OrderList } from '../../../components/ui/OrderList';
import styles from './OrdersPage.module.css';

const OrdersPage = () => {
  const { isLoading, error, data } = useOrders();
  const [search, setSearch] = useState('');

  const allOrders = data || [];
  const filtredOrders = allOrders.filter((item) =>
    item.id.toString().includes(search),
  );

  const ordersToShow = search ? filtredOrders : allOrders;

  let content;
  if (isLoading) content = <div>Carregando...</div>;
  else if (error) content = <div>Erro: {error}</div>;
  else if (ordersToShow.length === 0) {
    content = <div>Nenhum pedido encontrado.</div>;
  } else {
    content = (
      <>
        <input
          className={styles.search}
          type="search"
          name="search"
          placeholder="Buscar..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <section className={`${styles.orders} anim-show-left`}>
          <OrderList orders={ordersToShow} />
        </section>
      </>
    );
  }

  return (
    <>
      <Head title="Pedidos" description="Descrição da página Pedidos" />
      {content}
    </>
  );
};

export default OrdersPage;
