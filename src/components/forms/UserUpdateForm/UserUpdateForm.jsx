import PropTypes from 'prop-types';
import { addressPropType } from '../../../types/propTypes';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import useAddress from '../../../hooks/shared/useAddress';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import styles from './UserUpdateForm.module.css';

const UserUpdateForm = ({ data }) => {
  const { update, loading } = useContext(AuthContext);
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
  const { address, error } = useAddress(formData.zipCode);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await update(formData);
  };

  useEffect(() => {
    if (!address) return;

    setFormData((prev) => ({
      ...prev,
      street: address.street,
      neighborhood: address.neighborhood,
      city: address.city,
      state: address.state,
    }));
  }, [address]);

  useEffect(() => {
    setFormData({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      zipCode: data.address.zipCode,
      street: data.address.street,
      number: data.address.number,
      neighborhood: data.address.neighborhood,
      city: data.address.city,
      state: data.address.state,
    });
  }, [data]);

  useEffect(() => {
    if (!error) return;

    alert(error);
  }, [error]);

  return (
    // fix: corrigir name dos inputs
    <form className={`${styles.form} anim-show-left`} onSubmit={handleSubmit}>
      <Input
        type="text"
        label="Nome"
        name="firstName"
        id="first-name"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Primeiro nome"
        required
      />

      <Input
        type="text"
        label="Sobrenome"
        name="lastName"
        id="last-name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <Input
        type="email"
        label="E-mail"
        name="email"
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
        name="zipCode"
        id="zip-code"
        value={formData.zipCode}
        onChange={handleChange}
        placeholder="60000000"
        required
      />

      <Input
        type="text"
        label="Endereço"
        name="endereco"
        id="endereco"
        value={formData.street}
        readOnly
        required
      />

      <Input
        type="number"
        label="Número"
        name="number"
        id="number"
        value={formData.number}
        onChange={handleChange}
        required
      />

      <Input
        type="text"
        label="Bairro"
        name="neighborhood"
        id="bairro"
        value={formData.neighborhood}
        readOnly
        required
      />

      <Input
        type="text"
        label="Cidade"
        name="cidade"
        id="cidade"
        value={formData.city}
        readOnly
        required
      />

      <Input
        type="text"
        label="Estado"
        name="estado"
        id="estado"
        value={formData.state}
        readOnly
        required
      />

      <Button variant="primary" disabled={loading}>
        {loading ? 'Atualizando...' : 'Atualizar'}
      </Button>
    </form>
  );
};

UserUpdateForm.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: addressPropType.isRequired,
  }),
};

export default UserUpdateForm;
