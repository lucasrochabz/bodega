import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import camera from '../../assets/images/camera-1.jpg';
import './OrderCompleted.css';

export const OrderCompleted = () => {
  const { orderId } = useParams();

  const [order, setOrder] = useState({});

  const getOrder = async () => {
    const response = await fetch(`http://localhost:4000/orders/${orderId}`);
    const results = await response.json();
    setOrder(results.data);
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};
