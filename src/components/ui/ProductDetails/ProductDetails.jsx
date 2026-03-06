import PropTypes from 'prop-types';
import { productPropType } from '../../../types/propTypes';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../paths';
import { useToggle } from '../../../hooks/shared';
import { useCreateOrder } from '../../../hooks/orders';
import { formattedPriceToBRL } from '../../../utils/priceUtils';
import { Button } from '../Button';
import { ImageModal } from '../ImageModal';
import styles from './ProductDetails.module.css';

const images = import.meta.glob('/src/assets/images/*', {
  eager: true,
});

const ProductDetails = ({ product, isAuthenticated }) => {
  const imageModule = images[`/src/assets/images/${product.imagePath}`];
  const imagePath = imageModule?.default;

  const navigate = useNavigate();
  const [showModal, toggleShowModal] = useToggle(false);
  const { createOrder, isLoading } = useCreateOrder();

  const hasStock = product.stock > 0;
  const isButtonDisabled = isLoading || !hasStock;

  const buttonLabel = !hasStock ? 'Esgotado' : 'Finalizar Pedido';

  const handleImageClick = (event) => {
    event.stopPropagation();
    toggleShowModal();
  };

  const handleReturn = () => {
    navigate(ROUTES.home);
  };

  const handleButtonClick = () => {
    if (!hasStock) return;

    if (!isAuthenticated) {
      navigate(ROUTES.auth.login);
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
      navigate(ROUTES.checkout.goToDetails(response.id));
    }
  };

  return (
    <section className={styles.wrapper}>
      <img src={imagePath} alt={product.name} onClick={handleImageClick} />

      <div className={styles.content}>
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
