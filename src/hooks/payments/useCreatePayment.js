import { useState } from 'react';
import { paymentsService } from '../../services/paymentsService';

export const useCreatePayment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPayment = async (payload) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await paymentsService.checkout(payload);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { createPayment, isLoading, error };
};
