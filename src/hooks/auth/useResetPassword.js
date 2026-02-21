import { useState } from 'react';
import { authService } from '../../services/authService';

const useResetPassword = () => {
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const sendNewPassword = async ({ token, newPassword }) => {
    setIsloading(true);
    setError(null);

    try {
      const response = await authService.resetPassword({ token, newPassword });
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsloading(false);
    }
  };

  return { sendNewPassword, isloading, error };
};

export default useResetPassword;
