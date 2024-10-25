import './ButtonRequest.css';

export const ButtonRequest = ({ text, handleClick }) => {
  //  teste ver onde tem essa função e tirar
  // const handleClick = () => {
  //   alert(`Clicou no botão ${text}`);
  // };

  return (
    <>
      <button onClick={handleClick} className="btn-request">
        {text}
      </button>
    </>
  );
};
