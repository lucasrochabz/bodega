import { useState } from 'react';
import { ordersService } from '../../services/ordersService';

const useCreateOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createOrder = async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const response = await ordersService.createOrder(payload);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createOrder, loading, error };
};

export default useCreateOrder;
