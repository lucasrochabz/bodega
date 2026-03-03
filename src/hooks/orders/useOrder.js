import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { ordersService } from '../../services/ordersService';

const useOrder = (orderId) => {
  const { token } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;

    const fetchOrder = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await ordersService.getOrder(token, orderId);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (orderId) fetchOrder();
  }, [orderId, token]);

  return { isLoading, data, error };
};

export default useOrder;
