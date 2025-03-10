import './ButtonBuy.css';

export const ButtonBuy = ({ text, handleClick, isDisabled }) => {
  return (
    <>
      <button
        className={isDisabled ? 'btn-buy-disabled' : 'btn-buy'}
        onClick={handleClick}
        disabled={isDisabled}
        aria-disabled={isDisabled}
      >
        {text}
      </button>
    </>
  );
};
