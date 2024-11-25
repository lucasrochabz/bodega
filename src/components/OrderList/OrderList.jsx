// import { useEffect, useState } from 'react';
import camera from '../../assets/images/camera-1.jpg';
import './OrderList.css';

export const OrderList = () => {
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

  return (
    <section className="orders-bg">
      <h1>Seus pedidos</h1>
      <section className="order-item">
        <div className="order-head">
          <p>Número do pedido: #123456</p>
          <p>Pedido feito em: 25/11/2024</p>
        </div>

        <div className="order-teste">
          <img src={camera} alt="camera" />

          <div className="order-info">
            <h2>Câmera</h2>
            <p>R$ 2.000,00</p>
            <p>Status: Finalizado</p>
            <p>Vendido e entregue por: Bodega</p>
          </div>
        </div>
      </section>
    </section>
  );
};
