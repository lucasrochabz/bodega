import { formattedDate } from '../../utils/dateUtils';
import './OrdersList.css';

export const OrdersList = ({ orders }) => {
  return (
    <>
      {orders.map((order) => (
        <div className="order-list" key={order.id}>
          <p>{order.id}</p>
          <p>Data: {formattedDate(order.date)}</p>
          <p>{order.name}</p>
        </div>
      ))}
    </>
  );
};
