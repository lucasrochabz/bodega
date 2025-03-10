import { useEffect, useState } from 'react';
import { useLoading } from '../../hooks';
import { BASE_API_URL } from '../../../config';
import { ProductCard } from '../ProductCard/ProductCard';
import { Loading } from '../Loading';
import './ProductList.css';

export const ProductList = () => {
  const { loading, startLoading, stopLoading } = useLoading();

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    startLoading();
    try {
      const response = await fetch(`${BASE_API_URL}/products`);

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      setProducts(results.data);
    } catch (error) {
      console.error('Erro na requisição', error.message);
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
