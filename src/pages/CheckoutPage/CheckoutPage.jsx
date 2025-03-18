import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { CheckoutForm } from '../../components/CheckoutForm';
import { Footer } from '../../components/Footer';
import { OrderSummary } from '../../components/OrderSummary';
import './CheckoutPage.css';

export const CheckoutPage = () => {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to={'/'} />;
  return (
    <>
      <Head title="Checkout" description="Descrição da página Checkout" />
      <Header />
      <h2 className="default-title">Finalizar Compra</h2>
      <main className="checkout-page">
        <CheckoutForm />
        <OrderSummary />
      </main>

      <Footer />
    </>
  );
};
