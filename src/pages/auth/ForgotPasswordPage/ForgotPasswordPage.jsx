import { AuthLayout } from '@/components/layout/AuthLayout';
import { useForgotPassword } from '@/hooks/auth';
import { ForgotPasswordForm } from '@/components/forms/ForgotPasswordForm';

const ForgotPasswordPage = () => {
  const { sendEmail, isLoading } = useForgotPassword();

  const handleSubmit = async (values) => {
    const response = await sendEmail(values.email);

    if (response) {
      alert('Email enviado.');
      window.location.href = response;
    }
  };

  return (
    <AuthLayout page="forgot">
      <ForgotPasswordForm onSubmit={handleSubmit} isLoading={isLoading} />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
