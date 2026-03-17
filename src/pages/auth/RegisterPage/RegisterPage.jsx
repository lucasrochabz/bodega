import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../paths';
import { AuthContext } from '../../../contexts/AuthContext';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { SignUpForm } from '../../../components/forms/SignUpForm';

// fix: corrigir estilo
const RegisterPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate(ROUTES.auth.login);
  };

  if (isAuthenticated) return <Navigate to={ROUTES.account.base} />;
  return (
    <AuthLayout page="register">
      <SignUpForm onSuccess={handleSuccess} />
    </AuthLayout>
  );
};

export default RegisterPage;
