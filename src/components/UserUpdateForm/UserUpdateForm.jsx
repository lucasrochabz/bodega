import { useState, useEffect } from 'react';
import { CEP_GET, PUT_USER_UPDATE } from '../../utils/apiUtils';
import { useLoading } from '../../hooks/useLoading';
import { Input } from '../Input';
import { Button } from '../Button';
import './UserUpdateForm.css';

export const UserUpdateForm = ({ dados }) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: '',
    zip_code: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  const getCep = async () => {
    if (formData.zip_code.length === 8) {
      const { url, options } = CEP_GET(formData.zip_code);
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
    } else {
      setFormData((prev) => ({
        ...prev,
        street: '',
        neighborhood: '',
        city: '',
        state: '',
      }));
    }
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
      name: dados.name,
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
    getCep();
  }, [formData.zip_code]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    startLoading();
    try {
      const token = localStorage.getItem('token');

      const { url, options } = PUT_USER_UPDATE(token, formData);
      const response = await fetch(url, options);

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      alert(results.message);
    } catch (error) {
      console.error('Erro na requisição ao atualizar usuário:', error.message);
      alert(`Erro na requisição ao atualizar usuário: ${error.message}`);
    } finally {
      stopLoading();
    }
  };

  return (
    <article className="user-info-page" onSubmit={handleSubmit}>
      <h1>Minhas informações</h1>
      <section className="user-update">
        <form className="update">
          <Input
            type="text"
            label="Nome"
            id="name"
            value={formData.name}
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
