import { OrderCard } from '../OrderCard';
import './OrderList.css';

export const OrderList = ({ orders }) => {
  const orderedOrders = orders.sort((a, b) => a.id - b.id);

  return (
    <>
      {orderedOrders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </>
  );
};
