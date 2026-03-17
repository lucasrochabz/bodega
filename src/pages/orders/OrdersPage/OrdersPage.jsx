import { useState } from 'react';
import { useOrders } from '@/hooks/orders';
import { SEO } from '../../../components/shared/SEO';
import { LoadingState } from '@/components/ui/LoadingState';
import { ErrorState } from '@/components/ui/ErrorState';
import { EmptyState } from '@/components/ui/EmptyState';
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
  if (isLoading) content = <LoadingState />;
  else if (error) content = <ErrorState message={error} />;
  else if (ordersToShow.length === 0) {
    content = <EmptyState />;
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
      <SEO title="Pedidos" description="Descrição da página Pedidos" />
      {content}
    </>
  );
};

export default OrdersPage;
