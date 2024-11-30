import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonBuy } from '../ButtonBuy';
import './ProductDetail.css';

export const ProductDetail = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [photoCurrent, setPhotoCurrent] = useState('');

  const getProduct = async () => {
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const results = await response.json();
    setProduct(results.data);
    setPrice(results.data.price);
    setTotal(results.data.price);
    setPhotoCurrent(results.data.image_path);
  };

  const handleClick = async () => {
    console.log('fazer uma requisição post para criar pedido');
    const response = await fetch('http://localhost:4000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: 1,
        address_id: 1,
        date: '2024-11-29',
        status: 'Aguardando Pagamento',
        product_id: 9,
      }),
    });
    const data = await response.json();
    console.log(data);
    // const ordersPath = `/orders/2`;
    // window.location.href = ordersPath;
  };

  useEffect(() => {
    getProduct();
  }, []);

  const imagePath = `/src/assets/images/${photoCurrent}`;

  return (
    <div className="product-detail">
      <img src={`${imagePath}.jpg`} alt={product.name} />
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="info-prince">R$ {price}</p>
        <p className="info-descricao">{product.description}</p>
        <h2 className="info-total">Total: R$ {total}</h2>
        <ButtonBuy handleClick={handleClick} text={'Finalizar Pedido'} />
      </div>
    </div>
  );
};
