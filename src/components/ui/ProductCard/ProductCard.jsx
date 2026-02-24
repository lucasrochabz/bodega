import { useNavigate } from 'react-router-dom';
import { productPropType } from '../../../types/propTypes';
import { ROUTES } from '../../../routes/paths';
import { formattedPriceToBRL } from '../../../utils/priceUtils';
import styles from './ProductCard.module.css';

const images = import.meta.glob('/src/assets/images/*', {
  eager: true,
});

const ProductCard = ({ item }) => {
  const imageModule = images[`/src/assets/images/${item.imagePath}`];
  const imagePath = imageModule?.default;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${ROUTES.PRODUCT_DETAILS_BASE}/${item.id}`);
  };

  return (
    <div onClick={handleNavigate} className={styles.productCard}>
      <img src={imagePath} alt={item.name} />

      <div className={styles.wrapper}>
        <p className={styles.price}>{formattedPriceToBRL(item.price)}</p>
        <h2 className={styles.title}>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: productPropType,
};

export default ProductCard;
