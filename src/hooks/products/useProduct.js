import { useEffect, useState } from 'react';
import { productsService } from '../../services/productsService';

const useProduct = (productId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await productsService.getProduct(productId);
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (productId) fetchProduct();
  }, [productId]);

  return { data, isLoading, error };
};

export default useProduct;
