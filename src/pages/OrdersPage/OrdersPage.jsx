import { useEffect, useState } from 'react';
import { GET_ORDERS_USER } from '../../api/orders';
import { useFetch } from '../../hooks';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import { OrderList } from '../../components/OrderList';
import './OrdersPage.css';

const OrdersPage = () => {
  const { request, loading, data, error } = useFetch();
  const [search, setSearch] = useState('');

  const getOrders = async () => {
    const token = localStorage.getItem('token');

    const { url, options } = GET_ORDERS_USER(token);
    request(url, options);
  };

  const filtredOrders = data?.filter((item) =>
    item.id.toString().includes(search),
  );

  const ordersToShow = search ? filtredOrders : data;

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <Head title="Pedidos" description="Descrição da página Pedidos" />
      <input
        className="search"
        type="search"
        placeholder="Buscar..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {loading || !data ? (
        <Loading />
      ) : (
        <section className="orders-page">
          <OrderList orders={ordersToShow} />
        </section>
      )}
    </>
  );
};

export default OrdersPage;
