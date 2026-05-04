import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useAddress, useDebounce } from '@/hooks/shared';
import { Toast } from '@/components/ui/Toast';
import { Input } from '@/components/ui/Input';

// fix: add id aos inputs
const AddressForm = ({ formData, dispatch }) => {
  const debouncedZipCode = useDebounce(formData.zipCode, 500);
  const { address, error } = useAddress(debouncedZipCode);

  const handleChange = (event) => {
    const { name, value } = event.target;

    dispatch({
      type: 'UPDATE_FIELD',
      field: name,
      value,
    });
  };

  useEffect(() => {
    if (!address) return;

    dispatch({
      type: 'SET_ADDRESS',
      payload: {
        street: address.street,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.state,
      },
    });
  }, [address, dispatch]);

  return (
    <>
      <Toast show={!!error} message={error} />

      <Input
        label="CEP"
        name="zipCode"
        value={formData.zipCode}
        onChange={handleChange}
        required
      />

      <Input label="Endereço" name="street" value={formData.street} readOnly />

      <Input
        label="Número"
        name="number"
        value={formData.number}
        onChange={handleChange}
        required
      />

      <Input
        label="Bairro"
        name="neighborhood"
        value={formData.neighborhood}
        readOnly
      />

      <Input label="Cidade" name="city" value={formData.city} readOnly />

      <Input label="Estado" name="state" value={formData.state} readOnly />
    </>
  );
};

AddressForm.propTypes = {
  formData: PropTypes.shape({
    zipCode: PropTypes.string,
    street: PropTypes.string,
    number: PropTypes.string,
    neighborhood: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,

  dispatch: PropTypes.func.isRequired,
};

export default AddressForm;
