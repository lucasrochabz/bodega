import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonBuy } from '../ButtonBuy/ButtonBuy';
import default_image from '../../assets/images/default_image.png';
import notebook from '../../assets/images/notebook-1.jpg';
import camera from '../../assets/images/camera-1.jpg';
import smartphone from '../../assets/images/smartphone-1.jpg';
import smartwatch from '../../assets/images/smartwatch-1.jpg';
import tablet from '../../assets/images/tablet-1.jpg';
import './ProductDetail.css';

export const ProductDetail = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [stock, setStock] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  const [photoCurrent, setPhotoCurrent] = useState('');

  const getProduct = async () => {
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const results = await response.json();
    setProduct(results.data);
    setStock(results.data.stock);
    setPrice(results.data.price);
    setTotal(results.data.price);
    setPhotoCurrent(results.data.image_path);
    console.log(results.data.image_path);
  };

  const handleClick = () => {
    setStock((prevStock) => prevStock - 1);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const calcPrice = () => {
    setTotal(price * quantity);
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    calcPrice();
  }, [quantity]);

  useEffect(() => {
    if (stock === 0 && product.stock > 0) {
      alert('esgotou');
    }
  }, [stock, product]);

  return (
    <div className="product-detail">
      <img src={smartwatch} alt={product.name} />
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="info-prince">R$ {price}</p>
        <p className="info-descricao">{product.description}</p>
        <p>Estoque: {stock}</p>
        <p>Quantidade: {quantity}</p>
        <h2 className="info-total">Total: R$ {total}</h2>
        <ButtonBuy
          handleClick={handleClick}
          isDisabled={stock <= 0}
          text={'Adicionar'}
        />
      </div>
    </div>
  );
};
