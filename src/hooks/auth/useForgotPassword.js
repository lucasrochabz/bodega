import { useState } from 'react';
import { authService } from '../../services/authService';

const useForgotPassword = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (email) => {
    setIsloading(true);
    setError(null);

    try {
      const response = await authService.forgotPassword(email);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsloading(false);
    }
  };

  return { sendEmail, isLoading, error };
};

export default useForgotPassword;
