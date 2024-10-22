import { useState } from 'react';
import { SignUpModal } from '../SignUpModal/SignUpModal';
import './SignUpForm.css';

export const SignUpForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="signup-form">
      <h2 className="default-title">Crie a sua conta</h2>
      {isModalOpen && <SignUpModal isModalOpen={isModalOpen} />}

      <button className="btn-signup" onClick={handleModal}>
        {isModalOpen ? 'Já tem uma conta?' : 'Criar conta'}
      </button>
    </div>
  );
};
