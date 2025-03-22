import { useEffect, useState } from 'react';
import { useLoading } from './useLoading';

export const useFetch = (url, options) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (url, options) => {
    startLoading();
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const results = response.statusText;
        throw new Error(results);
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
  };

  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, [url, options]);

  return { loading, data, error };
};
