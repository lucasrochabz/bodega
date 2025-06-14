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

export default ProductList;
