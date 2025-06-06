import { useState, useEffect } from 'react';
import { GET_ADDRESS_DATA } from '../../api/address';
import { PUT_USER_UPDATE } from '../../api/users';
import { useFetch } from '../../hooks';
import { Input } from '../Input';
import { Button } from '../Button';
import './UserUpdateForm.css';

const UserUpdateForm = ({ dados }) => {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormData({
      first_name: dados.first_name,
      last_name: dados.last_name,
      email: dados.email,
      password: '',
      zip_code: dados.zip_code,
      street: dados.street,
      number: dados.number,
      neighborhood: dados.neighborhood,
      city: dados.city,
      state: dados.state,
    });
  }, [dados]);

  useEffect(() => {
    getAddressData();
  }, [formData.zip_code]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');

    const { url, options } = PUT_USER_UPDATE(token, formData);
    request(url, options);
  };

  return (
    <article className="user-info-page" onSubmit={handleSubmit}>
      <section className="user-update">
        <form className="update">
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

          <Button type="primary" disabled={loading}>
            Atualizar
          </Button>
        </form>
      </section>
    </article>
  );
};

export default UserUpdateForm;
