import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { formattedPriceToBRL } from '../../../utils/priceUtils';
import styles from './OrderSummary.module.css';

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
    <section className={styles.orderSummary}>
      <h2>Resumo</h2>
      <div className={styles.summaryItem}>
        <p>Subtotal:</p>
        <span>{formattedPriceToBRL(productPrice)}</span>

        <p>Frete:</p>
        <span>{formattedPriceToBRL(delivery)}</span>

        <p>Desconto:</p>
        <span>{formattedPriceToBRL(discount)}</span>

        <p className={styles.summaryItemAmount}>Total:</p>
        <span className={styles.summaryItemAmount}>
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
