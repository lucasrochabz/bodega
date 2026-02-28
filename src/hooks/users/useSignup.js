import { useState } from 'react';
import { usersService } from '../../services/usersService';

// fix: usar return boolean (mutation)
const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (payload) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await usersService.signup(payload);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;
