import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { CreateAccount } from '../../components/CreateAccount/CreateAccount';
import { Footer } from '../../components/Footer/Footer';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

export const LoginPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleModal = () => {
    setShowModal((prevState) => !prevState);
    setShowButton((prevState) => !prevState);
  };

  return (
    <div>
      <Header />

      <section className="login-container">
        <LoginForm />

        <h2>Crie a sua conta</h2>
        {showButton && <button onClick={handleModal}>Criar conta</button>}

        {showModal && <CreateAccount />}
      </section>

      <Footer />
    </div>
  );
};
