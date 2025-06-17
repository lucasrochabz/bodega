import { useNavigate } from 'react-router-dom';
import { formattedDate } from '../../utils/dateUtils';
import './OrderCard.css';

const OrderCard = ({ order }) => {
  const navigate = useNavigate();

  const handleNavigate = (event, orderId) => {
    event.preventDefault();
    navigate(`/account/orders/details/${orderId}`);
  };

  return (
    <div className="order-item" key={order.id}>
      <h2>Número do pedido: {order.id}</h2>
      <p>Realizado em: {formattedDate(order.created_at)}</p>
      <button onClick={(event) => handleNavigate(event, order.id)}>
        Ver detalhes
      </button>

      <div className="order-body">
        <h2>Produto:</h2>
        <p>{order.name}</p>
        <span>{order.status}</span>
      </div>
    </div>
  );
};

export default OrderCard;
