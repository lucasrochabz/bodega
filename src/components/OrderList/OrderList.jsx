// import { useEffect, useState } from 'react';
// import camera from '../../assets/images/camera-1.jpg';
import './OrderList.css';

export const OrderList = ({ order }) => {
  // const [orders, setOrders] = useState('');

  // const getOrders = async () => {
  //   const response = await fetch('url');
  //   const results = await response.json();
  //   setOrders(results.data);
  // };

  // useEffect(() => {
  //   getOrders();
  // }, []);

  // return (
  //   <div>
  //     {orders.map((order) => {
  //       <h2>item</h2>;
  //     })}
  //   </div>
  // );

  const imagePath = `/src/assets/images/${order.product.image_path}`;

  return (
    <section className="orders-bg">
      <h1>Seus pedidos</h1>
      <section className="order-item">
        <div className="order-head">
          <p>Número do pedido: #{order.id}</p>
          <p>Pedido feito em: 25/11/2024</p>
        </div>

        <div className="order-store">
          <p>Vendido e entregue por: Bodega</p>
        </div>

        <div className="order-teste">
          <img src={`${imagePath}.jpg`} alt="camera" />

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
