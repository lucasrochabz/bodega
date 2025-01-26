import { useNavigate } from 'react-router-dom';
import { formattedDate } from '../../utils/dateUtils';
import './OrdersList.css';

export const OrdersList = ({ orders }) => {
  const navigate = useNavigate();

  const handleClick = (orderId) => {
    navigate(`/my-account/orders/details/${orderId}`);
  };

  return (
    <>
      <h1>Meus pedidos</h1>
      {orders.map((order) => (
        <div
          className="order-list"
          key={order.id}
          onClick={() => handleClick(order.id)}
        >
          <h2>Número do pedido: {order.id}</h2>
          <p>Realizado em: {formattedDate(order.date)}</p>
          <button>Ver detalhes</button>
          <p>{order.name}</p>
          <span>{order.status}</span>
        </div>
      ))}
    </>
  );
};
