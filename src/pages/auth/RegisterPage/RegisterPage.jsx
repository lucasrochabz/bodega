import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../../paths';
import { AuthContext } from '../../../contexts/AuthContext';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { SignUpForm } from '../../../components/forms/SignUpForm';

// fix: corrigir estilo
const RegisterPage = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) return <Navigate to={ROUTES.account.base} />;
  return (
    <AuthLayout page="register">
      <SignUpForm />
    </AuthLayout>
  );
};

export default RegisterPage;
