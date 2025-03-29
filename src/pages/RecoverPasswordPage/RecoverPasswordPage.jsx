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
      <main className="auth-layout">
        <section className="recover-password">
          <h1 className="default-title">Perdeu a senha?</h1>
          <form className="recover-password-form">
            <Input type="email" label="E-mail" required />
            <Button type="primary">Enviar email</Button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};
