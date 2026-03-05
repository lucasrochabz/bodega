import { ROUTES } from '../../paths';
import {
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
} from '@/pages/auth';

const authRoutes = [
  { path: ROUTES.auth.login, element: <LoginPage /> },
  { path: ROUTES.auth.register, element: <RegisterPage /> },
  { path: ROUTES.auth.forgotPassword, element: <ForgotPasswordPage /> },
  { path: ROUTES.auth.resetPassword, element: <ResetPasswordPage /> },
];

export default authRoutes;
