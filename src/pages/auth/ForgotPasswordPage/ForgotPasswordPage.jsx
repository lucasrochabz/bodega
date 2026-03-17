import { AuthLayout } from '@/components/layout/AuthLayout';
import { ForgotPasswordForm } from '@/components/forms/ForgotPasswordForm';

const ForgotPasswordPage = () => {
  return (
    <AuthLayout page="forgot">
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
