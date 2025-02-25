import { formattedDate } from '../../utils/dateUtils';
import { formattedPriceToBRL } from '../../utils/priceUtils';
import './OrderDetails.css';

export const OrderDetails = ({ order }) => {
  const imagePath = `/src/assets/images/${order.image_path}`;

  return (
    <>
      <h1>Detalhes do pedido</h1>
      <div className="order-details">
        <div className="order-details-head">
          <p>Número do pedido: {order.id}</p>
          <p>Pedido feito em: {formattedDate(order.created_at)}</p>
        </div>

        <div className="order-store">
          <p>Vendido e entregue por: Bodega</p>
        </div>

        <div className="order-details-body">
          <img src={imagePath} alt={order.name} />

          <div className="order-info">
            <h2>{order.name}</h2>
            <p>{formattedPriceToBRL(order.price)}</p>
            <p>{order.status}</p>

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
        </div>
      </div>
    </>
  );
};
