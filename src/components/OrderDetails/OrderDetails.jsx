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
      <h1>Detalhes do pedido</h1>
      <div className="order-details">
        <div className="order-details-head">
          <ul>
            <li>Número do pedido: {order.id}</li>
            <li>Pedido realizado em: {formattedDate(order.created_at)}</li>
          </ul>

          <p>Vendido e entregue por: Bodega</p>
        </div>

        <div className="resume">
          <img src={imagePath} alt={order.name} />
          <ul>
            <li>
              <h2>{order.name}</h2>
            </li>
            <li>
              <p>Valor total: {formattedPriceToBRL(order.price)}</p>
            </li>
            <li>
              <p>{order.status}</p>
            </li>
          </ul>
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
