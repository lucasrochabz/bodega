import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { GET_PRODUCT_ID, POST_ORDERS } from '../../utils/apiUtils';
import { useLoading } from '../../hooks';
import { formattedPriceToBRL } from '../../utils/priceUtils';
import { Loading } from '../Loading';
import { Button } from '../Button';
import './ProductDetails.css';

export const ProductDetails = () => {
  const { login } = useContext(UserContext);
  const { productId } = useParams();
  const { loading, startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [imagePath, setImagePath] = useState('');

  const getProduct = async () => {
    startLoading();
    try {
      const { url, options } = GET_PRODUCT_ID(productId);
      const response = await fetch(url, options);

      const results = await response.json();
      setProduct(results.data);
      setPrice(results.data.price);
      setTotal(results.data.price);
      setImagePath(`/src/assets/images/${results.data.image_path}`);
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      alert(`Erro na requisição: ${error.message}`);
    } finally {
      stopLoading();
    }
  };

  const isAuhenticated = (login) => {
    if (!login) {
      navigate('/login');
      return false;
    }
    return true;
  };

  const createOrder = async () => {
    if (!isAuhenticated(login)) return;
    const token = localStorage.getItem('token');

    startLoading();
    try {
      const { url, options } = POST_ORDERS(token, {
        status: 'aguardando pagamento',
        products: [{ product_id: productId, quantity: 1 }],
      });
      const response = await fetch(url, options);

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      navigate(`/account/orders/details/${results.data.id}`);
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      alert(`Erro ao fazer pedido: ${error.message}`);
    } finally {
      stopLoading();
    }
  };

  const cancelOrder = () => {
    navigate('/');
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {loading || !product ? (
        <Loading />
      ) : (
        <section className="product-details">
          <img src={imagePath} alt={product.name} />
          <div className="product-details-info">
            <h1>{product.name}</h1>
            <p className="info-prince">{formattedPriceToBRL(price)}</p>
            <p className="info-descricao">{product.description}</p>
            <h2 className="info-total">Total: {formattedPriceToBRL(total)}</h2>
            <div className="btn-controls">
              <button className="btn-cancel-order" onClick={cancelOrder}>
                Cancelar
              </button>

              <Button type="secondary" disabled={loading} onClick={createOrder}>
                {login ? 'Finalizar Pedido' : 'Faça login para finalizar'}
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
