import { useState } from 'react';
import { usersService } from '../../services/users.service';

// fix: usar return boolean (mutation)
export const useSignup = () => {
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
