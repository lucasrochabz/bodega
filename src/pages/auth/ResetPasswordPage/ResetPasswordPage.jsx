import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTES } from '@/paths';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { ResetPasswordForm } from '@/components/forms/ResetPasswordForm';

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
