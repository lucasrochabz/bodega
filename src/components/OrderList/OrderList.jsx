import './OrderList.css';

export const OrderList = ({ order }) => {
  const imagePath = `/src/assets/images/${order.product.image_path}`;

  const formattedDate = () => {
    const date = new Date(order.date);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  return (
    <section className="orders-bg">
      <h1>Seus pedidos</h1>
      <section className="order-item">
        <div className="order-head">
          <p>Número do pedido: #{order.order_id}</p>
          <p>Pedido feito em: {formattedDate()}</p>
        </div>

        <div className="order-store">
          <p>Vendido e entregue por: Bodega</p>
        </div>

        <div className="order-teste">
          <img src={imagePath} alt={order.name} />

          <div className="order-info">
            <h2>{order.product.name}</h2>
            <p>R$ {order.product.price}</p>
            <p>{order.status}</p>
          </div>
        </div>
      </section>
    </section>
  );
};
