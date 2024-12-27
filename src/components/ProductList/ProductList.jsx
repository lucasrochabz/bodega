import { useEffect, useState } from 'react';
import { BASE_API_URL } from '../../../config';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(`${BASE_API_URL}/products`);
    const results = await response.json();
    setProducts(results.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="product-list">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
};
