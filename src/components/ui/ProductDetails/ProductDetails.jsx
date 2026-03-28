import PropTypes from 'prop-types';
import { productPropType } from '../../../types/propTypes';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../paths';
import { useToggle } from '@/hooks/shared';
import { formattedPriceToBRL } from '../../../utils/priceUtils';
import { Button } from '../Button';
import { ImageModal } from '../ImageModal';
import styles from './ProductDetails.module.css';

const images = import.meta.glob('/src/assets/images/*', {
  eager: true,
});

const ProductDetails = ({ product, onCreateOrder, isCreatingOrder }) => {
  const imageModule = images[`/src/assets/images/${product.imagePath}`];
  const imagePath = imageModule?.default;

  const navigate = useNavigate();
  const [showModal, toggleShowModal] = useToggle(false);

  const hasStock = product.stock > 0;

  const handleImageClick = (event) => {
    event.stopPropagation();
    toggleShowModal();
  };

  const handleReturn = () => {
    navigate(ROUTES.home);
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
            disabled={isCreatingOrder || !hasStock}
            onClick={onCreateOrder}
          >
            {!hasStock ? 'Esgotado' : 'Finalizar Pedido'}
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
  onCreateOrder: PropTypes.func.isRequired,
  isCreatingOrder: PropTypes.bool.isRequired,
};

export default ProductDetails;
