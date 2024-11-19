import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonBuy } from '../ButtonBuy/ButtonBuy';
import notebook from '../../assets/images/notebook-2.jpg';
import './ProductDetail.css';

export const ProductDetail = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [stock, setStock] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  const getProduct = async () => {
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const results = await response.json();
    setProduct(results.data);
    setStock(results.data.stock);
    setPrice(results.data.price);
  };

  const handleClick = () => {
    console.log('Você clicou em comprar.');
    setStock((prevStock) => prevStock - 1);
    setQuantity((prevQuantity) => prevQuantity + 1);
    setTotal(price * quantity);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="product-detail">
      <img src={notebook} alt={product.name} />
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="info-prince">{product.price}</p>
        <p className="info-descricao">{product.description}</p>
        <p>Estoque: {stock}</p>
        <p>Quantidade: {quantity}</p>
        <h2 className="info-total">Total: R$ {total.toFixed(2)}</h2>
        <ButtonBuy handleClick={handleClick} text={'Adicionar'} />
      </div>
    </div>
  );
};
