import './ButtonRequest.css';

export const ButtonRequest = ({ text }) => {
  const handleClick = () => {
    alert(`Clicou no botão ${text}`);
  };

  return (
    <>
      <button onClick={handleClick} className="btn-request">
        {text}
      </button>
    </>
  );
};
