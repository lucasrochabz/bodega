import { useEffect, useState } from 'react';
import { productsService } from '../../services/products.service';

export const useProducts = (page, pageSize) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await productsService.getAllProducts(page, pageSize, {
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

    if (page && pageSize) fetchProducts();

    return () => controller.abort();
  }, [page, pageSize]);

  return { data, isLoading, error };
};
