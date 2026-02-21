import PropTypes from 'prop-types';
import { productPropType } from '../../../types/propTypes';
import { ProductCard } from '../../ui/ProductCard';
import styles from './ProductList.module.css';

const ProductList = ({ data }) => {
  return (
    <section className={styles.productList}>
      {data.items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
};

ProductList.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(productPropType),
  }).isRequired,
};

export default ProductList;
