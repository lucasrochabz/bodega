import './OrderSummary.css';

export const OrderSummary = () => {
  return (
    <section className="order-summary">
      <h2>Resumo</h2>
      <div className="summary-item">
        <p>Subtotal:</p>
        <span>R$ 2500,00</span>

        <p>Frete:</p>
        <span>R$ 10,00</span>

        <p>Desconto:</p>
        <span>R$ 15,00</span>

        <p className="summary-item-amount">Total:</p>
        <span className="summary-item-amount">R$ 2495,00</span>
      </div>
    </section>
  );
};
