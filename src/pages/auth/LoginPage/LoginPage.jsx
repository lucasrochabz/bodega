import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '@/paths';
import { AuthContext } from '@/contexts/AuthContext';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Toast } from '@/components/ui/Toast';
import { LoginForm } from '@/components/forms/LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const { isAuthenticated, login, isLoading, error, clearError } =
    useContext(AuthContext);

  const { t } = useTranslation();

  if (isAuthenticated) return <Navigate to={ROUTES.home} replace />;
  return (
    <AuthLayout page="login">
      <Toast
        show={!!error}
        message={error}
        onClose={() => {
          clearError();
        }}
      />

      <LoginForm onSubmit={login} isLoading={isLoading} />

      <div className={styles.authLinks}>
        <Link to={ROUTES.auth.forgotPassword}>{t('auth.forgot.title')}</Link>

        <Link to={ROUTES.auth.register} className={styles.btnForm}>
          {t('auth.register.title')}
        </Link>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
