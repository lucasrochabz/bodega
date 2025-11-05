import { useNavigate } from 'react-router-dom';
import { productPropType } from '../../types/propTypes';
import { ROUTES } from '../../routes/paths';
import { formattedPriceToBRL } from '../../utils/priceUtils';
import styles from './ProductCard.module.css';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${ROUTES.PRODUCT_DETAILS_BASE}/${item.id}`);
  };

  const images = import.meta.glob('/src/assets/images/*', {
    eager: true,
  });

  const imagePath = images[`/src/assets/images/${item.image_path}`].default;

  return (
    <div onClick={handleNavigate} className={styles.productCard}>
      <img src={imagePath} alt={item.name} />

      <div className={styles.wrapper}>
        <p className={styles.price}>{formattedPriceToBRL(item.price)}</p>
        <h2 className={styles.title} key={item.id}>
          {item.name}
        </h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: productPropType,
};

export default ProductCard;
