import { useState, useEffect } from 'react';
import { BASE_API_URL } from '../../../config';
import { Input } from '../Input';
import { Button } from '../Button';
import './UserUpdateForm.css';

export const UserUpdateForm = ({ dados }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zipCode: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  const getCep = async () => {
    if (formData.zipCode.length === 8) {
      const response = await fetch(
        `https://viacep.com.br/ws/${formData.zipCode}/json`,
      );
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
      email: dados.email,
      password: '',
      zipCode: dados.zip_code,
      street: dados.street,
      number: dados.number,
      neighborhood: dados.neighborhood,
      city: dados.city,
      state: dados.state,
    });
  }, [dados]);

  useEffect(() => {
    getCep();
  }, [formData.zipCode]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');

      const response = await fetch(`${BASE_API_URL}/users/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const results = await response.json();
        throw new Error(results.message);
      }

      const results = await response.json();
      alert(results.message);
    } catch (error) {
      console.error('Erro na requisição ao atualizar usuário:', error.message);
      alert(`Erro na requisição ao atualizar usuário: ${error.message}`);
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
            placeholder="Nome completo"
            required
          />

          <Input
            type="email"
            label="Email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="exemplo@email.com"
            required
          />

          <Input
            type="number"
            label={'CEP'}
            id={'zipCode'}
            value={formData.zipCode}
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

          <Button type="primary">Atualizar</Button>
        </form>
      </section>
    </article>
  );
};
