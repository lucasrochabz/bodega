import PropTypes from 'prop-types';
import { addressPropType } from '../../../types/propTypes';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import styles from './UserUpdateForm.module.css';
import useAddress from '../../../hooks/useAddress';

const UserUpdateForm = ({ data }) => {
  const { updateUser, loading } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
  });
  const { address } = useAddress(formData.zipCode);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await updateUser(formData);
  };

  useEffect(() => {
    if (!address) return;

    setFormData((prev) => ({
      ...prev,
      street: address.logradouro,
      neighborhood: address.bairro,
      city: address.localidade,
      state: address.uf,
    }));
  }, [address]);

  useEffect(() => {
    setFormData({
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      zipCode: data.address.zip_code,
      street: data.address.street,
      number: data.address.number,
      neighborhood: data.address.neighborhood,
      city: data.address.city,
      state: data.address.state,
    });
  }, [data]);

  return (
    <form className={`${styles.form} anim-show-left`} onSubmit={handleSubmit}>
      <Input
        type="text"
        label="Nome"
        id="first_name"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Primeiro nome"
        required
      />

      <Input
        type="text"
        label="Sobrenome"
        id="last_name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <Input
        type="email"
        label="E-mail"
        id="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="exemplo@email.com"
        readOnly
        required
      />

      <Input
        type="number"
        label="CEP"
        id="zipCode"
        value={formData.zipCode}
        onChange={handleChange}
        placeholder="60000000"
        required
      />

      <Input
        type="text"
        label="Endereço"
        id="endereco"
        value={formData.street}
        readOnly
        required
      />

      <Input
        type="number"
        label="Número"
        id="number"
        value={formData.number}
        onChange={handleChange}
        required
      />

      <Input
        type="text"
        label="Bairro"
        id="bairro"
        value={formData.neighborhood}
        readOnly
        required
      />

      <Input
        type="text"
        label="Cidade"
        id="cidade"
        value={formData.city}
        readOnly
        required
      />

      <Input
        type="text"
        label="Estado"
        id="estado"
        value={formData.state}
        readOnly
        required
      />

      <Button variant="primary" disabled={loading}>
        Atualizar
      </Button>
    </form>
  );
};

UserUpdateForm.propTypes = {
  data: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: addressPropType.isRequired,
  }),
};

export default UserUpdateForm;
