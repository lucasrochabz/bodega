import './ButtonBuy.css';

export const ButtonBuy = ({ text, handleClick }) => {
  return (
    <>
      <button onClick={handleClick} className="btn-buy">
        {text}
      </button>
    </>
  );
};
