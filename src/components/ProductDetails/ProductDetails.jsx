import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { GET_PRODUCT_ID, POST_ORDERS } from '../../helpers/apiHelper';
import { useFetch, useLoading } from '../../hooks';
import { formattedPriceToBRL } from '../../utils/priceUtils';
import { Loading } from '../Loading';
import { Button } from '../Button';
import './ProductDetails.css';

export const ProductDetails = () => {
  const { login } = useContext(UserContext);
  const { productId } = useParams();
  const { loading, startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();

  const [url, setUrl] = useState('');
  const [options, setOptions] = useState(null);
  const { data, error } = useFetch(url, options);

  const getProduct = async () => {
    const { url, options } = GET_PRODUCT_ID(productId);
    setUrl(url);
    setOptions(options);
  };

  const isAuhenticated = (login) => {
    if (!login) {
      navigate('/login');
      return false;
    }
    return true;
  };

  const finalizeOrder = async () => {
    if (!isAuhenticated(login)) return;
    const token = localStorage.getItem('token');

    startLoading();
    try {
      const { url, options } = POST_ORDERS(token, {
        status: 'rascunho',
        products: [{ product_id: productId, quantity: 1 }],
      });
      const response = await fetch(url, options);

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      navigate(`/checkout/${results.data.id}`);
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

  const images = import.meta.glob('/src/assets/images/*', {
    eager: true,
  });

  const imagePath = images[`/src/assets/images/${data?.image_path}`]?.default;

  return (
    <>
      {loading || !data ? (
        <Loading />
      ) : (
        <section className="product-details">
          <img src={imagePath} alt={data.name} />

          <div className="product-details-info">
            <h1>{data.name}</h1>
            <p className="info-prince">{formattedPriceToBRL(data.price)}</p>
            <p className="info-descricao">{data.description}</p>
            <h2 className="info-total">
              Total: {formattedPriceToBRL(data.price)}
            </h2>
            <div className="btn-controls">
              <button className="btn-cancel-order" onClick={cancelOrder}>
                Cancelar
              </button>

              <Button
                type="secondary"
                disabled={loading}
                onClick={finalizeOrder}
              >
                {login ? 'Finalizar Pedido' : 'Faça login para comprar'}
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
