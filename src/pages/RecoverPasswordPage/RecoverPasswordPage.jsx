import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import './RecoverPasswordPage.css';

export const RecoverPasswordPage = () => {
  return (
    <>
      <Head
        title="Recuperar senha"
        description="Descrição da página Recover Password"
      />
      <Header />
      <main className="recover-password">
        <h2>Perdeu a senha?</h2>
        <form className="recover-password-form">
          <Input type="email" label="E-mail" required />
          <Button type="primary">Enviar email</Button>
        </form>
      </main>
      <Footer />
    </>
  );
};
