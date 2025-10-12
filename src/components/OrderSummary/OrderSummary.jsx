import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { formattedPriceToBRL } from '../../utils/priceUtils';
import './OrderSummary.css';

const OrderSummary = ({ orderData }) => {
  const delivery = 10;
  const discount = 15;

  const [productPrice, setProductPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const orderPrice = parseFloat(orderData.price);
    setProductPrice(orderPrice);
    setAmount(orderPrice + delivery - discount);
  }, [orderData.price]);

  return (
    <section className="order-summary">
      <h2>Resumo</h2>
      <div className="summary-item">
        <p>Subtotal:</p>
        <span>{formattedPriceToBRL(productPrice)}</span>

        <p>Frete:</p>
        <span>{formattedPriceToBRL(delivery)}</span>

        <p>Desconto:</p>
        <span>{formattedPriceToBRL(discount)}</span>

        <p className="summary-item-amount">Total:</p>
        <span className="summary-item-amount">
          {formattedPriceToBRL(amount)}
        </span>
      </div>
    </section>
  );
};

OrderSummary.propTypes = {
  orderData: PropTypes.shape({
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderSummary;
