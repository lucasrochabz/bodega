import { useState } from 'react';
import { SignUpModal } from '../SignUpModal/SignUpModal';
import './SignUpForm.css';

export const SignUpForm = () => {
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
    <div className="signup-form">
      <h2 className="default-title">Crie a sua conta</h2>
      {isModalOpen && <SignUpModal isModalOpen={isModalOpen} />}

      <button className="btn-signup" onClick={handleModal}>
        {nome}
      </button>
    </div>
  );
};
