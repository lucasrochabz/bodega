import { formattedDate } from '../../utils/dateUtils';
import { formattedPriceToBRL } from '../../utils/priceUtils';
import './OrderDetails.css';

export const OrderDetails = ({ order }) => {
  const images = import.meta.glob('/src/assets/images/*', {
    eager: true,
  });

  const imagePath = images[`/src/assets/images/${order.image_path}`].default;

  return (
    <>
      <div className="order-details">
        <div className="order-details-head">
          <p>Número do pedido: {order.id}</p>
          <span>Pedido realizado em: {formattedDate(order.created_at)}</span>
          <p>Vendido e entregue por: Bodega</p>
        </div>

        <div className="resume">
          <img src={imagePath} alt={order.name} />

          <div>
            <h2>{order.name}</h2>
            <p>Valor total: {formattedPriceToBRL(order.price)}</p>
            <p>{order.status}</p>
          </div>
        </div>

        <ul className="delivery">
          <li>
            <h3>Informações de entrega</h3>
          </li>
          <li>
            Endereço: <span>{order.street}</span>
          </li>
          <li>
            Número: <span>{order.number}</span>
          </li>
          <li>
            Bairro: <span>{order.neighborhood}</span>
          </li>
          <li>
            Cidade:{' '}
            <span>
              {order.city}, {order.state}
            </span>
          </li>
          <li>
            CEP: <span>{order.zip_code}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
