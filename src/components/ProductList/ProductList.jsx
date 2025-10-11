import PropTypes from 'prop-types';
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
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image_path: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default ProductList;
