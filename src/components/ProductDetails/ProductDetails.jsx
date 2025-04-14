import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { GET_PRODUCT_ID } from '../../api/products';
import { POST_ORDERS } from '../../api/orders';
import { useFetch } from '../../hooks';
import { formattedPriceToBRL } from '../../utils/priceUtils';
import { Loading } from '../Loading';
import { Button } from '../Button';
import { ImageModal } from '../ImageModal';
import './ProductDetails.css';

export const ProductDetails = () => {
  const { login } = useContext(UserContext);
  const { productId } = useParams();
  const navigate = useNavigate();

  const {
    request: productRequest,
    loading,
    data: productData,
    error: errorProduct,
  } = useFetch();
  const {
    request: orderRequest,
    data: orderData,
    error: errorOrder,
  } = useFetch();

  const getProduct = async () => {
    const { url, options } = GET_PRODUCT_ID(productId);
    productRequest(url, options);
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
    orderRequest(url, options);
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (event) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = (event) => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return (
    <>
      {loading || !productData ? (
        <Loading />
      ) : (
        <section className="product-details">
          <img
            src={imagePath}
            alt={productData.name}
            onClick={handleImageClick}
          />

          <div className="product-details-info">
            <h1>{productData.name}</h1>
            <span className="info-price">
              {formattedPriceToBRL(productData.price)}
            </span>
            <p className="info-descricao">{productData.description}</p>

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

          {isModalOpen && (
            <ImageModal imagePath={imagePath} onClose={handleCloseModal} />
          )}
        </section>
      )}
    </>
  );
};
