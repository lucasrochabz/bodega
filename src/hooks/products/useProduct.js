import { useEffect, useState } from 'react';
import { productsService } from '../../services/products.service';

// fix: corrigir catch error
export const useProduct = (productId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await productsService.getProduct(productId, {
          signal: controller.signal,
        });
        setData(result);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (productId) fetchProduct();

    return () => controller.abort();
  }, [productId]);

  return { data, isLoading, error };
};
