import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { SignUpForm } from '../../components/SignUpForm';
import { Footer } from '../../components/Footer';
import './RegisterPage.css';

export const RegisterPage = () => {
  return (
    <>
      <Head title="Register" description="Descrição da página Register" />

      <Header />
      <SignUpForm />
      <Footer />
    </>
  );
};
