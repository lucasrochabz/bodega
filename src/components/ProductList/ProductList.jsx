import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks';
import { GET_PRODUCTS } from '../../helpers/apiHelper';
import { ProductCard } from '../ProductCard/ProductCard';
import { Loading } from '../Loading';
import './ProductList.css';

export const ProductList = () => {
  const [url, setUrl] = useState('');
  const [options, setOptions] = useState(null);
  const { loading, data, error } = useFetch(url, options);

  const getProducts = async () => {
    const { url, options } = GET_PRODUCTS();
    setUrl(url);
    setOptions(options);
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
