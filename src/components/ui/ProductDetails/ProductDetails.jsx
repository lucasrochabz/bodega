import PropTypes from 'prop-types';
import { productPropType } from '../../../types/propTypes';
import { useNavigate } from 'react-router-dom';
import { useToggle } from '../../../hooks';
import useCreateOrder from '../../../hooks/orders/useCreateOrder';
import { ROUTES } from '../../../routes/paths';
import { formattedPriceToBRL } from '../../../utils/priceUtils';
import { Button } from '../Button';
import { ImageModal } from '../ImageModal';
import styles from './ProductDetails.module.css';

const images = import.meta.glob('/src/assets/images/*', {
  eager: true,
});

const ProductDetails = ({ product, isAuthenticated }) => {
  const imageModule = images[`/src/assets/images/${product.image_path}`];
  const imagePath = imageModule?.default;

  const navigate = useNavigate();
  const [showModal, toggleShowModal] = useToggle(false);
  const { createOrder, isLoading } = useCreateOrder();

  const hasStock = product.stock > 0;
  const isButtonDisabled = isLoading || !hasStock;

  const buttonLabel = !hasStock
    ? 'Esgotado'
    : isAuthenticated
      ? 'Finalizar Pedido'
      : 'Faça login para comprar';

  const handleImageClick = (event) => {
    event.stopPropagation();
    toggleShowModal();
  };

  const handleReturn = () => {
    navigate(ROUTES.HOME);
  };

  const handleButtonClick = () => {
    if (!hasStock) return;

    if (!isAuthenticated) {
      navigate(ROUTES.LOGIN);
      return;
    }

    handleFinalizeOrder();
  };

  const handleFinalizeOrder = async () => {
    const response = await createOrder({
      status: 'rascunho',
      products: [{ product_id: product.id, quantity: 1 }],
    });

    if (response?.id) {
      navigate(`${ROUTES.CHECKOUT_BASE}/${response.id}`);
    }
  };

  return (
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
            disabled={isButtonDisabled}
            onClick={handleButtonClick}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>

      {showModal && (
        <ImageModal imagePath={imagePath} onClose={toggleShowModal} />
      )}
    </section>
  );
};

ProductDetails.propTypes = {
  product: productPropType.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default ProductDetails;
