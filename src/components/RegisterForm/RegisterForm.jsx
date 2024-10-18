import { useState } from 'react';
import { CreateAccount } from '../../components/CreateAccount/CreateAccount';
import './RegisterForm.css';

export const RegisterForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nome, setNome] = useState('Criar conta');

  const handleModal = () => {
    setIsModalOpen((prevState) => !prevState);

    if (isModalOpen) {
      setNome('Criar conta');
    } else {
      setNome('Já tem uma conta?');
    }
  };

  return (
    <div>
      <h2 className="login-title">Crie a sua conta</h2>
      <button onClick={handleModal}>{nome}</button>

      {isModalOpen && <CreateAccount />}
    </div>
  );
};
