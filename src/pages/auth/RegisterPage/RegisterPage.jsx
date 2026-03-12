import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../../paths';
import { AuthContext } from '../../../contexts/AuthContext';
import { Head } from '../../../components/shared/Head';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { SignUpForm } from '../../../components/forms/SignUpForm';

// fix: corrigir estilo
const RegisterPage = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) return <Navigate to={ROUTES.account.base} />;
  return (
    <>
      <Head title="Register" description="Descrição da página Register" />

      <AuthLayout page="register">
        <SignUpForm />
      </AuthLayout>
    </>
  );
};

export default RegisterPage;
