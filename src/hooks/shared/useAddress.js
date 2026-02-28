import { useEffect, useState } from 'react';
import { addressService } from '../../services/addressService';

const useAddress = (zipCode) => {
  const [address, setAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAddress = async () => {
      if (!zipCode || zipCode.length !== 8) {
        setAddress(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const result = await addressService.getAddress(zipCode);

        setAddress(result);
      } catch (err) {
        setError(err.message);
        setAddress(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAddress();
  }, [zipCode]);

  return { address, isLoading, error };
};

export default useAddress;
