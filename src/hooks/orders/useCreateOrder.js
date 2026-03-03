import { useContext, useState } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { ordersService } from '../../services/ordersService';

const useCreateOrder = () => {
  const { token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createOrder = async (payload) => {
    if (!token) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await ordersService.createOrder(token, payload);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { createOrder, isLoading, error };
};

export default useCreateOrder;
