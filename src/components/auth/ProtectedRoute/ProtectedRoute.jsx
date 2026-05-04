import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { AuthContext } from '../../../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.auth.login} replace />;
  }

  return children ?? <Outlet />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
