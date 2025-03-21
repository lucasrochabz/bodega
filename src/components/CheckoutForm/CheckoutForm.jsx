import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../hooks';
import { PUT_ORDER_UPDATE } from '../../helpers/apiHelper';
import { Input } from '../Input';
import { Button } from '../Button';
import './CheckoutForm.css';

export const CheckoutForm = ({ userData, orderData }) => {
  const { startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();

  const makePayment = async (event) => {
    event.preventDefault();

    startLoading();
    try {
      const { url, options } = PUT_ORDER_UPDATE(orderData.id, {
        status: 'pagamento efetuado',
      });
      const response = await fetch(url, options);
      navigate(`/account/orders/details/${orderData.id}`);
    } catch (error) {
      console.error(error.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <section className="checkout">
      <form onSubmit={makePayment} className="checkout-form">
        <div className="checkout-default">
          <span>Informações Pessoais</span>
          <Input
            type="text"
            label="Nome"
            id="name"
            value={userData.first_name}
          />

          <Input
            type="email"
            label="E-mail"
            id="email"
            value={userData.email}
          />
        </div>

        <div className="checkout-default">
          <span>Informações de entrega</span>
          <Input
            type="number"
            label="CEP"
            id="cep"
            value={userData.zip_code}
            placeholder="60000000"
          />

          <Input
            type="text"
            label="Endereço"
            id="street"
            value={userData.street}
            readOnly
          />

          <Input
            type="number"
            label="Número"
            id="number"
            value={userData.number}
          />

          <Input
            type="text"
            label="Bairro"
            id="neighborhood"
            value={userData.neighborhood}
            readOnly
          />

          <Input
            type="text"
            label="Cidade"
            id="city"
            value={userData.city}
            readOnly
          />

          <Input
            type="text"
            label="Estado"
            id="state"
            value={userData.state}
            readOnly
          />
        </div>

        <div className="checkout-default">
          <span>Informações de pagamento</span>

          <label htmlFor="card-brand">Marca do cartão</label>
          <select id="card-brand">
            <option value="" disabled>
              Selecione...
            </option>
            <option value="mastercard">Mastercard</option>
            <option value="visa">Visa</option>
          </select>

          <Input
            type="text"
            label="Nome no cartão"
            id="card_name"
            placeholder="Insira o nome no cartão"
          />

          <Input
            type="number"
            label="Número do cartão"
            id="card_number"
            placeholder="0000 0000 0000 0000"
          />

          <Input
            type="text"
            label="Validade do cartão"
            id="card_validity"
            placeholder="00/00"
          />
          <Input type="number" label="CVV" id="card_value" placeholder="000" />
        </div>

        <Button type="primary">Realizar Pagamento</Button>
      </form>
    </section>
  );
};
