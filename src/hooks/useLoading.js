import { useState } from 'react';

export const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(true);
  };

  return {
    startLoading,
    stopLoading,
    loading,
  };
};
