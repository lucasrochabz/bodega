import { useState } from 'react';
import { authService } from '../../services/authService';

const useForgotPassword = () => {
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (email) => {
    setIsloading(true);
    setIsloading(null);

    try {
      const response = await authService.forgotPassword(email);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsloading(false);
    }
  };

  return { sendEmail, isloading, error };
};

export default useForgotPassword;
