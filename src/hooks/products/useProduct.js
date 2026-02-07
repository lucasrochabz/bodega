import { useEffect, useState } from 'react';
import { productsService } from '../../services/productsService';

const useProduct = (productId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await productsService.getProduct(productId);
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (productId) fetchProduct();
  }, [productId]);

  return { data, loading, error };
};

export default useProduct;
