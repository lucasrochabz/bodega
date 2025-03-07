import { useState, useEffect } from 'react';
import { Input } from '../Input';
import './UserUpdateForm.css';

export const UserUpdateForm = ({ dados }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    zipCode: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
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
        endereco: cepResult.logradouro,
        bairro: cepResult.bairro,
        cidade: cepResult.localidade,
        estado: cepResult.uf,
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
      endereco: dados.street,
      numero: dados.number,
      bairro: dados.neighborhood,
      cidade: dados.city,
      estado: dados.state,
    });
  }, [dados]);

  useEffect(() => {
    getCep();
  }, [formData.zipCode]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <article className="user-info-page" onSubmit={handleSubmit}>
      <h1>Minhas informações</h1>
      <div className="user-update">
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
            type="password"
            label="Senha"
            id="password"
            value={formData.password}
            onChange={handleChange}
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
            value={formData.endereco}
            readOnly
            required
          />

          <Input
            type="number"
            label={'Número'}
            id={'numero'}
            value={formData.numero}
            onChange={handleChange}
            required
          />

          <Input
            type="text"
            label={'Bairro'}
            id={'bairro'}
            value={formData.bairro}
            readOnly
            required
          />

          <Input
            type="text"
            label={'Cidade'}
            id={'cidade'}
            value={formData.cidade}
            readOnly
            required
          />

          <Input
            type="text"
            label={'Estado'}
            id={'estado'}
            value={formData.estado}
            readOnly
            required
          />

          <button className="btn-update">Atualizar</button>
        </form>
      </div>
    </article>
  );
};
