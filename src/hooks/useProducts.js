import { useEffect, useState } from 'react';
import { productsService } from '../services/productsService';

const useProducts = ({ page, pageSize }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await productsService.getAllProducts({ page, pageSize });
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (page && pageSize) fetchProduct();
  }, [page, pageSize]);

  return { data, loading, error };
};

export default useProducts;
