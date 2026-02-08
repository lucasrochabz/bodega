import { useEffect, useState } from 'react';
import { ordersService } from '../../services/ordersService';

const useOrders = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await ordersService.getMyOrders();
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return { data, loading, error };
};

export default useOrders;
