import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { GET_PRODUCT_ID, POST_ORDERS } from '../../helpers/apiHelper';
import { useFetch } from '../../hooks';
import { formattedPriceToBRL } from '../../utils/priceUtils';
import { Loading } from '../Loading';
import { Button } from '../Button';
import './ProductDetails.css';

export const ProductDetails = () => {
  const { login } = useContext(UserContext);
  const { productId } = useParams();
  const navigate = useNavigate();

  const [productUrl, setProductUrl] = useState('');
  const [productOptions, setProductOptions] = useState(null);
  const [orderUrl, setOrderUrl] = useState('');
  const [orderOptions, setOrderOptions] = useState(null);

  const {
    loading,
    data: productData,
    error: errorProduct,
  } = useFetch(productUrl, productOptions);
  const { data: orderData, error: errorOrder } = useFetch(
    orderUrl,
    orderOptions,
  );

  const getProduct = async () => {
    const { url, options } = GET_PRODUCT_ID(productId);
    setProductUrl(url);
    setProductOptions(options);
  };

  const isAuhenticated = (login) => {
    if (!login) {
      navigate('/login');
      return false;
    }
    return true;
  };

  const handleFinalizeOrder = async () => {
    if (!isAuhenticated(login)) return;
    const token = localStorage.getItem('token');

    const { url, options } = POST_ORDERS(token, {
      status: 'rascunho',
      products: [{ product_id: productId, quantity: 1 }],
    });
    setOrderUrl(url);
    setOrderOptions(options);
  };

  const handleReturn = () => {
    navigate('/');
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    if (orderData) {
      navigate(`/checkout/${orderData.id}`);
    }
  }, [orderData]);

  const images = import.meta.glob('/src/assets/images/*', {
    eager: true,
  });

  const imagePath =
    images[`/src/assets/images/${productData?.image_path}`]?.default;

  return (
    <>
      {loading || !productData ? (
        <Loading />
      ) : (
        <section className="product-details">
          <img src={imagePath} alt={productData.name} />

          <div className="product-details-info">
            <h1>{productData.name}</h1>
            <p className="info-prince">
              {formattedPriceToBRL(productData.price)}
            </p>
            <p className="info-descricao">{productData.description}</p>
            <h2 className="info-total">
              Total: {formattedPriceToBRL(productData.price)}
            </h2>
            <div className="btn-controls">
              <button className="btn-cancel-order" onClick={handleReturn}>
                Voltar
              </button>

              <Button
                type="secondary"
                disabled={loading}
                onClick={handleFinalizeOrder}
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
