import { useEffect, useState } from 'react';
import { ordersService } from '../../services/ordersService';

const useOrder = (orderId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await ordersService.getOrder(orderId);
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (orderId) fetchOrder();
  }, [orderId]);

  return { isLoading, data, error };
};

export default useOrder;
