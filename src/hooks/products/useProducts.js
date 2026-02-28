import { useEffect, useState } from 'react';
import { productsService } from '../../services/productsService';

const useProducts = ({ page, pageSize }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await productsService.getAllProducts({ page, pageSize });
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (page && pageSize) fetchProducts();
  }, [page, pageSize]);

  return { data, isLoading, error };
};

export default useProducts;
