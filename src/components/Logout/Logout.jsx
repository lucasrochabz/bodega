import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './Logout.css';

export const Logout = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate('/login');
  };

  return (
    <button className="btn-logout" onClick={handleClick}>
      Sair
    </button>
  );
};
