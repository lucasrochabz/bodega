import { apiClient } from '../http/client';

const authService = {
  getMe: () => {
    return apiClient('/api/v1/auth/me', {
      method: 'GET',
    });
  },

  login: (payload) => {
    return apiClient('/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  forgotPassword: (email) => {
    return apiClient('/api/v1/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({
        email,
        origin: window.location.origin,
      }),
    });
  },

  resetPassword: ({ token, newPassword }) => {
    return apiClient(`/api/v1/auth/reset-password?token=${token}`, {
      method: 'POST',
      body: JSON.stringify({ newPassword }),
    });
  },
};

export { authService };
