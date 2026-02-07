import { useEffect, useState } from 'react';
import { ordersService } from '../../services/ordersService';

const useOrder = (orderId) => {
  const [data, setData] = useState(null);
  // fix: mudar para isLoading
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await ordersService.getOrder(orderId);
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (orderId) fetchOrder();
  }, [orderId]);

  return { data, loading, error };
};

export default useOrder;
