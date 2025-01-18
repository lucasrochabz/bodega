import { useEffect, useState } from 'react';
import { BASE_API_URL } from '../../../config';
import { useLoading } from '../../hooks';
import { ProductCard } from '../ProductCard/ProductCard';
import { Loading } from '../Loading';
import './ProductList.css';

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  const { loading, startLoading, stopLoading } = useLoading();

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
    <section className="product-list">
      {loading || products.length === 0 ? (
        <Loading />
      ) : (
        products.map((item) => <ProductCard key={item.id} item={item} />)
      )}
    </section>
  );
};
