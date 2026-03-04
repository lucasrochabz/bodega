import { useEffect, useState } from 'react';
import { ordersService } from '../../services/ordersService';

const useOrders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await ordersService.getMyOrders();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return { isLoading, data, error };
};

export default useOrders;
