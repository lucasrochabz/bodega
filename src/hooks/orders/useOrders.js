import { useEffect, useState } from 'react';
import { ordersService } from '../../services/orders.service';

export const useOrders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchOrders = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await ordersService.getMyOrders({
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

    fetchOrders();

    return () => controller.abort();
  }, []);

  return { isLoading, data, error };
};
