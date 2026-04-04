import { useContext } from 'react';
import { ToastContext } from '@/contexts/ToastContext';
import { useForgotPassword } from '@/hooks/auth';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { ForgotPasswordForm } from '@/components/forms/ForgotPasswordForm';

// fix: add ToastContext
const ForgotPasswordPage = () => {
  const { sendEmail, isLoading } = useForgotPassword();
  const { success, error } = useContext(ToastContext);

  const onSubmit = async (values) => {
    const response = await sendEmail(values.email);

    if (!response) {
      error('Erro ao enviar email.');
      return;
    }

    success('Email enviado com sucesso!');
    window.location.href = response;
  };

  return (
    <AuthLayout page="forgot">
      <ForgotPasswordForm onSubmit={onSubmit} isLoading={isLoading} />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
