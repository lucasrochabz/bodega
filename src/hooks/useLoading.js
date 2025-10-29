import { useState } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(true);
  };

  return {
    loading,
    startLoading,
    stopLoading,
  };
};

export default useLoading;
