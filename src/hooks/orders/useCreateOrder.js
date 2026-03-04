import { useState } from 'react';
import { ordersService } from '../../services/ordersService';

const useCreateOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createOrder = async (payload) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await ordersService.createOrder(payload);
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
