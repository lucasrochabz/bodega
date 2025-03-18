import { Input } from '../Input';
import { Button } from '../Button';
import './CheckoutForm.css';

export const CheckoutForm = () => {
  return (
    <section className="checkout">
      <form className="checkout-form">
        <div className="checkout-default">
          <span>Informações Pessoais</span>
          <Input type="text" label="Nome" id="name" />

          <Input type="email" label="E-mail" id="email" />
        </div>

        <div className="checkout-default">
          <span>Informações de entrega</span>
          <Input type="number" label="CEP" id="cep" placeholder="60000000" />

          <Input type="text" label="Endereço" id="street" readOnly />

          <Input type="number" label="Número" id="number" />

          <Input type="text" label="Bairro" id="neighborhood" readOnly />

          <Input type="text" label="Cidade" id="city" readOnly />

          <Input type="text" label="Estado" id="state" readOnly />
        </div>

        <div className="checkout-default">
          <span>Informações de pagamento</span>

          <label htmlFor="card-brand">Marca do cartão</label>
          <select id="card-brand">
            <option value="" disabled selected>
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
