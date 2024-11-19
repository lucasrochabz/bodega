import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonBuy } from '../ButtonBuy/ButtonBuy';
import notebook from '../../assets/images/notebook-2.jpg';
import './ProductDetail.css';

export const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const getProduct = async () => {
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const results = await response.json();
    setProduct(results.data);
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
        <p>Estoque: {product.stock}</p>
        {/* <p>Quantidade: {quantity}</p> */}
        {/* <h2 className="info-total">Total: {formattedPrice(total)}</h2> */}
        <ButtonBuy text={'Comprar'} />
      </div>
    </div>
  );
};
