import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import './OrderCompleted.css';

export const OrderCompleted = () => {
  return (
    <div>
      <Header />
      <h1>Pedido finalizado com sucesso.</h1>
      <h2>Agora é só aguardar...</h2>
      <h2>O seu produto: nome_do_produto</h2>
      <h3>Chegar em 5 dias</h3>
      <h3>No endereço: endereço</h3>
      <Footer />
    </div>
  );
};
