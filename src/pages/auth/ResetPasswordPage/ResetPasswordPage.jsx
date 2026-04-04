import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { ResetPasswordForm } from '@/components/forms/ResetPasswordForm';

// fix: mudar para onSubmit
const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');

  const handleSuccess = () => {
    navigate(ROUTES.auth.login);
  };

  return (
    <AuthLayout page="reset">
      <ResetPasswordForm token={token} onSuccess={handleSuccess} />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
