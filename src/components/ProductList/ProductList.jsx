import PropTypes from 'prop-types';
import { productPropType } from '../../types/propTypes';
import { ProductCard } from '../ProductCard';
import './ProductList.css';

const ProductList = ({ data }) => {
  return (
    <>
      <section className="product-list">
        {data.results.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </section>
    </>
  );
};

ProductList.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.arrayOf(productPropType),
  }).isRequired,
};

export default ProductList;
