import PropTypes from 'prop-types';
import { addressPropType } from '../../types/propTypes';
import { useState, useEffect } from 'react';
import { GET_ADDRESS_DATA } from '../../api/address';
import { PUT_USER_UPDATE } from '../../api/users';
import { useFetch } from '../../hooks';
import { Input } from '../Input';
import { Button } from '../Button';
import styles from './UserUpdateForm.module.css';

const UserUpdateForm = ({ data }) => {
  const { request, loading } = useFetch();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    zip_code: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');

    const { url, options } = PUT_USER_UPDATE(token, formData);
    request(url, options);
  };

  useEffect(() => {
    const getAddressData = async () => {
      if (formData.zip_code.length !== 8) {
        setFormData((prev) => ({
          ...prev,
          street: '',
          neighborhood: '',
          city: '',
          state: '',
        }));
        return;
      }
      const { url, options } = GET_ADDRESS_DATA(formData.zip_code);
      const response = await fetch(url, options);

      const cepResult = await response.json();
      if (cepResult.erro) {
        alert('CEP inválido');
        return;
      }

      setFormData((prev) => ({
        ...prev,
        street: cepResult.logradouro,
        neighborhood: cepResult.bairro,
        city: cepResult.localidade,
        state: cepResult.uf,
      }));
    };

    getAddressData();
  }, [formData.zip_code]);

  useEffect(() => {
    setFormData({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      zip_code: data.address.zip_code,
      street: data.address.street,
      number: data.address.number,
      neighborhood: data.address.neighborhood,
      city: data.address.city,
      state: data.address.state,
    });
  }, [data]);

  return (
    <article className={styles.userInfoPage} onSubmit={handleSubmit}>
      <section className={styles.userUpdate}>
        <form className={styles.update}>
          <Input
            type="text"
            label="Nome"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Primeiro nome"
            required
          />

          <Input
            type="text"
            label="Sobrenome"
            id="last_name"
            value={formData.last_name}
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
            label={'CEP'}
            id={'zip_code'}
            value={formData.zip_code}
            onChange={handleChange}
            placeholder="60000000"
            required
          />

          <Input
            type="text"
            label={'Endereço'}
            id={'endereco'}
            value={formData.street}
            readOnly
            required
          />

          <Input
            type="number"
            label={'Número'}
            id={'number'}
            value={formData.number}
            onChange={handleChange}
            required
          />

          <Input
            type="text"
            label={'Bairro'}
            id={'bairro'}
            value={formData.neighborhood}
            readOnly
            required
          />

          <Input
            type="text"
            label={'Cidade'}
            id={'cidade'}
            value={formData.city}
            readOnly
            required
          />

          <Input
            type="text"
            label={'Estado'}
            id={'estado'}
            value={formData.state}
            readOnly
            required
          />

          <Button variant="primary" disabled={loading}>
            Atualizar
          </Button>
        </form>
      </section>
    </article>
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
