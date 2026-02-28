import { useState } from 'react';
import { authService } from '../../services/authService';

const useResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendNewPassword = async ({ token, newPassword }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.resetPassword({ token, newPassword });
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendNewPassword, isLoading, error };
};

export default useResetPassword;
