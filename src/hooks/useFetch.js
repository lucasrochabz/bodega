import { useCallback, useState } from 'react';
import { useLoading } from './index';

// fix: exportar os erros onde o useFetch é utilizado
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
      console.error(error);
      throw error;
    } finally {
      stopLoading();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { request, loading, results, error };
};

export default useFetch;
