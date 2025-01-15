import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_API_URL } from '../../../config';
import { useLoading } from '../../hooks';
import { Loading } from '../Loading';
import { ButtonBuy } from '../ButtonBuy';
import './ProductDetail.css';

export const ProductDetail = () => {
  const { productId } = useParams();

  const { loading, startLoading, stopLoading } = useLoading();

  const [product, setProduct] = useState({});
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [imagePath, setImagePath] = useState('');

  const getProduct = async () => {
    startLoading();
    try {
      const response = await fetch(`${BASE_API_URL}/products/${productId}`);
      const results = await response.json();
      setProduct(results.data);
      setPrice(results.data.price);
      setTotal(results.data.price);
      setImagePath(`/src/assets/images/${results.data.image_path}`);
    } catch (error) {
      console.error('Erro na requisição');
    } finally {
      stopLoading();
    }
  };

  const setDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  const createOrder = async () => {
    startLoading();
    try {
      const response = await fetch(`${BASE_API_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: 1,
          address_id: 1,
          date: setDate(),
          status: 'rascunho',
          products: [{ product_id: productId, quantity: 1 }],
        }),
      });

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      const ordersPath = `/orders/${results.data.id}`;
      window.location.href = ordersPath;
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      alert(`Erro ao fazer pedido: ${error.message}`);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="product-detail">
          <img src={imagePath} alt={product.name} />
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="info-prince">R$ {price}</p>
            <p className="info-descricao">{product.description}</p>
            <h2 className="info-total">Total: R$ {total}</h2>
            <ButtonBuy handleClick={createOrder} text={'Finalizar Pedido'} />
          </div>
        </div>
      )}
    </>
  );
};
