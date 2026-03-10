import { useEffect, useState } from 'react';
import { ordersService } from '../../services/orders.service';

export const useOrder = (orderId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchOrder = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await ordersService.getOrder(orderId, {
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

    if (orderId) fetchOrder();

    return () => controller.abort();
  }, [orderId]);

  return { isLoading, data, error };
};
