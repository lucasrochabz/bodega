import { useState } from 'react';
import { ordersService } from '../../services/ordersService';

const useCreateOrder = () => {
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const createOrder = async (payload) => {
    setIsloading(true);
    setError(null);

    try {
      const response = await ordersService.createOrder(payload);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsloading(false);
    }
  };

  return { createOrder, isloading, error };
};

export default useCreateOrder;
