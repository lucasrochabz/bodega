import { ROUTES } from '../../../paths';
import {
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
} from '@/pages/auth';

const authRoutes = [
  { path: ROUTES.LOGIN, element: <LoginPage /> },
  { path: ROUTES.REGISTER, element: <RegisterPage /> },
  { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
  { path: `${ROUTES.RESET_PASSWORD}`, element: <ResetPasswordPage /> },
];

export default authRoutes;
