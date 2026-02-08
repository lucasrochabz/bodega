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

const ProductDetails = ({ product, isLoading, isAuthenticated }) => {
  const navigate = useNavigate();
  const [showModal, toggleShowModal] = useToggle(false);

  const { createOrder, isLoading: orderIsLoading } = useCreateOrder();

  const imagePath = images[`/src/assets/images/${product.image_path}`]?.default;

  const handleReturn = () => {
    navigate(ROUTES.HOME);
  };

  const handleImageClick = (event) => {
    event.stopPropagation();
    toggleShowModal();
  };

  const redirectUser = () => {
    if (!isAuthenticated) {
      navigate(ROUTES.LOGIN);
      return;
    }
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
              disabled={isLoading}
              onClick={isAuthenticated ? handleFinalizeOrder : redirectUser}
            >
              {isAuthenticated ? 'Finalizar Pedido' : 'Faça login para comprar'}
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
  isLoading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  product: productPropType.isRequired,
};

export default ProductDetails;
