import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

export const ProductList = ({ data }) => {
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
