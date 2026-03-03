import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { ordersService } from '../../services/ordersService';

const useOrders = () => {
  const { token } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;

    const fetchOrders = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await ordersService.getMyOrders(token);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  return { isLoading, data, error };
};

export default useOrders;
