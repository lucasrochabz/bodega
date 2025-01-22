import { useState } from 'react';
import { SignUpModal } from '../SignUpModal';
import './SignUpForm.css';

export const SignUpForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return (
    <div className="signup-form">
      <h2 className="default-title">Crie a sua conta</h2>
      {isModalOpen && (
        <SignUpModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      <button className="btn-signup-form" onClick={toggleModal}>
        {isModalOpen ? 'Já tem uma conta?' : 'Criar conta'}
      </button>
    </div>
  );
};
