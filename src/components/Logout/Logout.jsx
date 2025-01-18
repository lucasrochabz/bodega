import { useNavigate } from 'react-router-dom';
import './Logout.css';

export const Logout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <button className="btn-logout" onClick={handleClick}>
      Sair
    </button>
  );
};
