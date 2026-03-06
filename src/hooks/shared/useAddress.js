import { useEffect, useState } from 'react';
import { addressService } from '../../services/address.service';

export const useAddress = (zipCode) => {
  const [address, setAddress] = useState({
    street: '',
    neighborhood: '',
    city: '',
    state: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!zipCode || zipCode.length !== 8) {
      setAddress({ street: '', neighborhood: '', city: '', state: '' });
      setError(null);
      return;
    }

    const fetchAddress = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await addressService.getAddress(zipCode);

        setAddress(result);
      } catch (err) {
        setError(err.message);
        setAddress({ street: '', neighborhood: '', city: '', state: '' });
      } finally {
        setIsLoading(false);
      }
    };
    fetchAddress();
  }, [zipCode]);

  return { address, isLoading, error };
};
