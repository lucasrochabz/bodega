import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { ROUTES } from '../../routes/paths';

const ProtectedRoute = ({ children }) => {
  const { login } = useContext(UserContext);

  return login ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default ProtectedRoute;
