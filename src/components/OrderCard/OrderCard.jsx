import { useNavigate } from 'react-router-dom';
import { formattedDate } from '../../utils/dateUtils';
import './OrderCard.css';

export const OrderCard = ({ order }) => {
  const navigate = useNavigate();

  const handleNavigate = (event, orderId) => {
    event.preventDefault();
    navigate(`/my-account/orders/details/${orderId}`);
  };

  return (
    <div className="order-item" key={order.id}>
      <div className="order-head">
        <div>
          <h2>Número do pedido: {order.id}</h2>
          <p>Realizado em: {formattedDate(order.created_at)}</p>
        </div>
        <button onClick={(event) => handleNavigate(event, order.id)}>
          Ver detalhes
        </button>
      </div>
      <div className="order-body">
        <h2>Produto(s):</h2>
        <p>{order.name}</p>
        <span>{order.status}</span>
      </div>
    </div>
  );
};
