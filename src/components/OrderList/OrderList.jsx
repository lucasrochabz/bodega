import './OrderList.css';

export const OrderList = ({ order }) => {
  const formattedDate = (item) => {
    const date = new Date(item.date);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
  };

  return (
    <section className="orders-bg">
      <h1>Seus pedidos</h1>
      {order.map((item) => {
        return (
          <section key={item.id} className="order-item">
            <div className="order-head">
              <p>Número do pedido: #{item.id}</p>
              <p>Pedido feito em: {formattedDate(item)}</p>
            </div>

            <div className="order-store">
              <p>Vendido e entregue por: Bodega</p>
            </div>

            <div className="order-teste">
              {item.products.map((product) => {
                const imagePath = `/src/assets/images/${product.image_path}`;
                return (
                  <div key={product.id}>
                    <img src={imagePath} alt={item.products.name} />

                    <div className="order-info">
                      <h2>{product.name}</h2>
                      <p>R$ {product.price}</p>
                      {/* <p>{item.status}</p> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </section>
  );
};
