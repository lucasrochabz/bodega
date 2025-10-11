import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { POST_ORDERS } from '../../api/orders';
import { useFetch } from '../../hooks';
import { ROUTES } from '../../routes/paths';
import { formattedPriceToBRL } from '../../utils/priceUtils';
import { Button } from '../Button';
import { ImageModal } from '../ImageModal';
import './ProductDetails.css';

const images = import.meta.glob('/src/assets/images/*', {
  eager: true,
});

const ProductDetails = ({ product, loading, isLogin }) => {
  const navigate = useNavigate();
  const { request } = useFetch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productData = product.data;
  const imagePath =
    images[`/src/assets/images/${productData.image_path}`]?.default;

  const handleReturn = () => {
    navigate(ROUTES.HOME);
  };

  const handleImageClick = (event) => {
    event.stopPropagation();

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const handleFinalizeOrder = async () => {
    if (!isLogin) {
      navigate(ROUTES.LOGIN);
      return;
    }

    const token = localStorage.getItem('token');

    const { url, options } = POST_ORDERS(token, {
      status: 'rascunho',
      products: [{ product_id: product.data.id, quantity: 1 }],
    });

    const response = await request(url, options);

    if (response?.data?.id) {
      navigate(`${ROUTES.CHECKOUT_BASE}/${response.data.id}`);
    }
  };

  return (
    <>
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
              {isLogin ? 'Finalizar Pedido' : 'Faça login para comprar'}
            </Button>
          </div>
        </div>

        {isModalOpen && (
          <ImageModal imagePath={imagePath} onClose={handleCloseModal} />
        )}
      </section>
    </>
  );
};

ProductDetails.propTypes = {
  loading: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool.isRequired,
  product: PropTypes.shape({
    success: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      image_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }),
};

export default ProductDetails;
