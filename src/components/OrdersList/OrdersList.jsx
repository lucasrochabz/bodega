import { useNavigate } from 'react-router-dom';
import { formattedDate } from '../../utils/dateUtils';
import './OrdersList.css';

export const OrdersList = ({ orders }) => {
  const navigate = useNavigate();

  const handleClick = (orderId, event) => {
    event.preventDefault();
    navigate(`/my-account/orders/details/${orderId}`);
  };

  const orderedOrders = orders.sort((a, b) => a.id - b.id);

  return (
    <>
      <h1>Meus pedidos</h1>
      {orderedOrders.map((order) => (
        <div className="order-content" key={order.id}>
          <div className="order-content-head">
            <div>
              <h2>Número do pedido: {order.id}</h2>
              <p>Realizado em: {formattedDate(order.date)}</p>
            </div>
            <button onClick={(event) => handleClick(order.id, event)}>
              Ver detalhes
            </button>
          </div>
          <h2>Produtos:</h2>
          <p>{order.name}</p>
          <span>{order.status}</span>
        </div>
      ))}
    </>
  );
};
