import { useNavigate } from 'react-router-dom';
import { formattedDate } from '../../utils/dateUtils';
import './OrdersList.css';

export const OrdersList = ({ orders }) => {
  const navigate = useNavigate();

  const handleClick = (orderId) => {
    navigate(`/orders/details/${orderId}`);
  };

  return (
    <>
      {orders.map((order) => (
        <div
          className="order-list"
          key={order.id}
          onClick={() => handleClick(order.id)}
        >
          <p>{order.id}</p>
          <p>Data: {formattedDate(order.date)}</p>
          <p>{order.name}</p>
        </div>
      ))}
    </>
  );
};
