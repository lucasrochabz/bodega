import PropTypes from 'prop-types';
import { OrderCard } from '../OrderCard';
import './OrderList.css';

const OrderList = ({ orders }) => {
  const orderedOrders = orders.sort((a, b) => a.id - b.id);

  return (
    <>
      {orderedOrders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </>
  );
};

OrderList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default OrderList;
