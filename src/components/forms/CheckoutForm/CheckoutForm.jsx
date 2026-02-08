import PropTypes from 'prop-types';
import { addressPropType } from '../../../types/propTypes';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../../routes/paths';
import useCreatePayment from '../../../hooks/payments/useCreatePayment';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import styles from './CheckoutForm.module.css';

const CheckoutForm = ({ userData }) => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const { createPayment, loading } = useCreatePayment();

  const handleMakePayment = async (event) => {
    event.preventDefault();

    const response = await createPayment({
      order_id: Number(orderId),
      payment_method: 'credit_card',
      gateway: 'stripe',
      payment_token: crypto.randomUUID(),
    });

    if (response) {
      navigate(`${ROUTES.ACCOUNT_ORDER_DETAILS}/${orderId}`);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleMakePayment}>
      <div className={styles.wrapper}>
        <span>Informações Pessoais</span>
        <Input type="text" label="Nome" id="name" value={userData.firstName} />

        <Input type="email" label="E-mail" id="email" value={userData.email} />
      </div>

      <div className={styles.wrapper}>
        <span>Informações de entrega</span>
        <Input
          type="number"
          label="CEP"
          id="cep"
          value={userData.address.zipCode}
          placeholder="60000000"
        />

        <Input
          type="text"
          label="Endereço"
          id="street"
          value={userData.address.street}
          readOnly
        />

        <Input
          type="number"
          label="Número"
          id="number"
          value={userData.address.number}
        />

        <Input
          type="text"
          label="Bairro"
          id="neighborhood"
          value={userData.address.neighborhood}
          readOnly
        />

        <Input
          type="text"
          label="Cidade"
          id="city"
          value={userData.address.city}
          readOnly
        />

        <Input
          type="text"
          label="Estado"
          id="state"
          value={userData.address.state}
          readOnly
        />
      </div>

      <div className={styles.wrapper}>
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

      <Button variant="primary">Realizar Pagamento</Button>
    </form>
  );
};

CheckoutForm.propTypes = {
  userData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: addressPropType.isRequired,
  }).isRequired,
};

export default CheckoutForm;
