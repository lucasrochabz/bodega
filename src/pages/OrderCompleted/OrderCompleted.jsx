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
      <section className="section-teste">
        <div className="order-teste">
          <img src={camera} alt="camera" />
        </div>
        <div className="teste-teste-order">
          <p>Número do pedido: #123456</p>
          <p>R$ 2.000,00</p>
          <h2>Câmera</h2>
          <p>Chega em 5 dias</p>
          <p>No endereço: Rua Sem nome</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};
