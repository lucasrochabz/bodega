import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../../paths';
import { AuthContext } from '../../../contexts/AuthContext';
import { Head } from '../../../components/shared/Head';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { LoginForm } from '../../../components/forms/LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const { t } = useTranslation();

  if (isAuthenticated) return <Navigate to={ROUTES.home} replace />;
  return (
    <>
      <Head title="Login" description="Descrição da página Login" />
      <AuthLayout page="login">
        <LoginForm />

        <div className={styles.authLinks}>
          <Link to={ROUTES.auth.forgotPassword}>Perdeu a senha?</Link>

          <Link to={ROUTES.auth.register} className={styles.btnForm}>
            {t('login.signup')}
          </Link>
        </div>
      </AuthLayout>
    </>
  );
};

export default LoginPage;
