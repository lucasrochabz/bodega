import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './Logout.css';

export const Logout = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate('/login');
  };

  return (
    <button className="btn-logout" onClick={handleLogout}>
      Sair
    </button>
  );
};
