import './RequestButton.css';

export const RequestButton = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick} className="request-btn">
      {text}
    </button>
  );
};
