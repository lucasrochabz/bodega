import { useEffect } from 'react';
import { useFetch } from '../../hooks';
import { GET_PRODUCTS } from '../../helpers/apiHelper';
import { ProductCard } from '../ProductCard/ProductCard';
import { Loading } from '../Loading';
import './ProductList.css';

export const ProductList = () => {
  const { request, loading, data, error } = useFetch();

  const getProducts = async () => {
    const { url, options } = GET_PRODUCTS();
    request(url, options);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {loading || !data ? (
        <Loading />
      ) : (
        <section className="product-list">
          {data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </section>
      )}
    </>
  );
};
