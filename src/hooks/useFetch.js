import { useCallback, useState } from 'react';
import { useLoading } from './index';

const useFetch = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, options) => {
    startLoading();
    try {
      const response = await fetch(url, options);
      const results = await response.json();

      if (!response.ok) {
        throw new Error(results.message || 'Erro na requisição.');
      }

      setResults(results);
      return results;
    } catch (error) {
      setError(error.message);
      console.error(error.message);
      alert(error.message);
    } finally {
      stopLoading();
    }
  }, []);

  return { request, loading, results, error };
};

export default useFetch;
