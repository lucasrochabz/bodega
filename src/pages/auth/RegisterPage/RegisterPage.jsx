import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../paths';
import { AuthContext } from '../../../contexts/AuthContext';
import { useSignup } from '@/hooks/users';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { SignupForm } from '../../../components/forms/SignupForm';

// fix: corrigir estilo
const RegisterPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const { signup, isLoading } = useSignup();

  const onSubmit = async (data) => {
    const response = await signup(data);

    if (response) navigate(ROUTES.auth.login);
  };

  if (isAuthenticated) return <Navigate to={ROUTES.account.base} />;
  return (
    <AuthLayout page="register">
      <SignupForm onSubmit={onSubmit} isLoading={isLoading} />
    </AuthLayout>
  );
};

export default RegisterPage;
