import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes/paths';
import { formattedDate } from '../../../utils/dateUtils';
import styles from './OrderCard.module.css';

const OrderCard = ({ order }) => {
  const navigate = useNavigate();

  const handleNavigate = (event, orderId) => {
    event.preventDefault();

    navigate(`${ROUTES.ACCOUNT_ORDER_DETAILS}/${orderId}`);
  };

  return (
    <div className={styles.orderItem} key={order.id}>
      <h2>Número do pedido: {order.id}</h2>
      <p>Realizado em: {formattedDate(order.created_at)}</p>
      <button onClick={(event) => handleNavigate(event, order.id)}>
        Ver detalhes
      </button>

      <div className={styles.orderBody}>
        <h2>Produto:</h2>
        <p>{order.name}</p>
        <span>{order.status}</span>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }),
};

export default OrderCard;
