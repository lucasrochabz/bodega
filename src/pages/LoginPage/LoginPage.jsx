import { Header } from '../../components/Header/Header';
// import { CreateAccount } from '../../components/CreateAccount/CreateAccount';
import { Footer } from '../../components/Footer/Footer';
import { InputField } from '../../components/InputField/InputField';
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <div>
      <Header />

      <section className="login-container">
        <div className="login-field">
          <InputField label={'email'} name={'Email'} />
          <InputField label={'senha'} name={'Senha'} />

          <button>Entrar</button>
        </div>
      </section>
      {/* <CreateAccount /> */}
      <Footer />
    </div>
  );
};
