import PropTypes from 'prop-types';
import { productPropType } from '../../../types/propTypes';
import { useNavigate } from 'react-router-dom';
import { useToggle } from '../../../hooks';
import { ordersService } from '../../../services/ordersService';
import { ROUTES } from '../../../routes/paths';
import { formattedPriceToBRL } from '../../../utils/priceUtils';
import { Button } from '../Button';
import { ImageModal } from '../ImageModal';
import styles from './ProductDetails.module.css';

const images = import.meta.glob('/src/assets/images/*', {
  eager: true,
});

const ProductDetails = ({ product, loading, isLogin }) => {
  const navigate = useNavigate();
  const [showModal, toggleShowModal] = useToggle(false);

  const imagePath = images[`/src/assets/images/${product.image_path}`]?.default;

  const handleReturn = () => {
    navigate(ROUTES.HOME);
  };

  const handleImageClick = (event) => {
    event.stopPropagation();
    toggleShowModal();
  };

  const createDraftOrder = () => {
    return ordersService.createOrder({
      status: 'rascunho',
      products: [{ product_id: product.id, quantity: 1 }],
    });
  };

  const redirectUser = () => {
    if (!isLogin) {
      navigate(ROUTES.LOGIN);
      return;
    }
  };

  const handleFinalizeOrder = async () => {
    const response = await createDraftOrder();

    if (response?.data?.id) {
      navigate(`${ROUTES.CHECKOUT_BASE}/${response.data.id}`);
    }
  };

  return (
    <>
      <section className={styles.container}>
        <img src={imagePath} alt={product.name} onClick={handleImageClick} />

        <div className={styles.wrapper}>
          <h1>{product.name}</h1>
          <span className={styles.price}>
            {formattedPriceToBRL(product.price)}
          </span>
          <p className={styles.description}>{product.description}</p>

          <div className={styles.btnControls}>
            <button className={styles.btnCancelOrder} onClick={handleReturn}>
              Voltar
            </button>

            <Button
              variant="secondary"
              disabled={loading}
              onClick={isLogin ? handleFinalizeOrder : redirectUser}
            >
              {isLogin ? 'Finalizar Pedido' : 'Faça login para comprar'}
            </Button>
          </div>
        </div>

        {showModal && (
          <ImageModal imagePath={imagePath} onClose={toggleShowModal} />
        )}
      </section>
    </>
  );
};

ProductDetails.propTypes = {
  loading: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool.isRequired,
  product: productPropType.isRequired,
};

export default ProductDetails;
