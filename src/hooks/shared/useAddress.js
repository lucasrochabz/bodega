import { useEffect, useState } from 'react';
import { addressService } from '../../services/addressService';

const useAddress = (zipCode) => {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAddress = async () => {
      if (!zipCode || zipCode.length !== 8) {
        setAddress(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const result = await addressService.getAddress(zipCode);

        setAddress(result);
      } catch (err) {
        setError(err.message);
        setAddress(null);
      } finally {
        setLoading(false);
      }
    };
    fetchAddress();
  }, [zipCode]);

  return { address, loading, error };
};

export default useAddress;
