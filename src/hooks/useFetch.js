import { useCallback, useState } from 'react';
import { useLoading } from './useLoading';

export const useFetch = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, options) => {
    startLoading();
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      setData(results.data);
    } catch (error) {
      setError(error.message);
      console.error(error.message);
      alert(error.message);
    } finally {
      stopLoading();
    }
  }, []);

  return { request, loading, data, error };
};
