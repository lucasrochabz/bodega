import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { CheckoutForm } from '../../components/CheckoutForm';
import { Footer } from '../../components/Footer';

export const CheckoutPage = () => {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to={'/'} />;
  return (
    <>
      <Head title="Checkout" description="" />
      <Header />
      <CheckoutForm />

      <Footer />
    </>
  );
};
