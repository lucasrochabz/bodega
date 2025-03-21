import { useEffect, useState } from 'react';
import { useLoading } from '../../hooks';
import { GET_PRODUCTS } from '../../helpers/apiHelper';
import { ProductCard } from '../ProductCard/ProductCard';
import { Loading } from '../Loading';
import './ProductList.css';

export const ProductList = () => {
  const { loading, startLoading, stopLoading } = useLoading();

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    startLoading();
    try {
      const { url, options } = GET_PRODUCTS();
      const response = await fetch(url, options);

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      setProducts(results.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error.message);
      alert(`Erro ao buscar produtos: ${error.message}`);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {loading || products.length === 0 ? (
        <Loading />
      ) : (
        <section className="product-list">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </section>
      )}
    </>
  );
};
