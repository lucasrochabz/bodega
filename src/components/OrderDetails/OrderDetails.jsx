import './OrderDetails.css';

export const OrderDetails = ({ order }) => {
  const imagePath = `/src/assets/images/${order.image_path}`;

  const formattedDate = (item) => {
    const date = new Date(item.date);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
  };

  return (
    <section className="order-details-bg">
      <h1>Detalhes do pedido</h1>
      <section className="order-item">
        <div className="order-head">
          <p>Número do pedido: {order.id}</p>
          <p>Pedido feito em: {formattedDate(order)}</p>
        </div>

        <div className="order-store">
          <p>Vendido e entregue por: Bodega</p>
        </div>

        <div className="order-teste">
          <div>
            <img src={imagePath} alt={order.name} />

            <div className="order-info">
              <h2>{order.name}</h2>
              <p>R$ {order.price}</p>
              <p>{order.status}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
