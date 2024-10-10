import './Header.css';

export const Header = () => {
  const handleClick = () => {
    console.log('clicou no botão Login');
  };

  return (
    <div className="header">
      <h2>Logo</h2>
      <button className="btn-login" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};
