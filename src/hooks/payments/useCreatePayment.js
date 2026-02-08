import { useState } from 'react';
import { paymentsService } from '../../services/paymentsService';

const useCreatePayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPayment = async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const response = await paymentsService.checkout(payload);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createPayment, loading, error };
};

export default useCreatePayment;
