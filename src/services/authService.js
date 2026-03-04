import { apiClient } from '../http/client';

const authService = {
  getMe: async () => {
    const response = await apiClient('/api/v1/auth/me', {
      method: 'GET',
    });

    return response.data;
  },

  login: async (payload) => {
    const response = await apiClient('/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    return response.data;
  },

  forgotPassword: async (email) => {
    const response = await apiClient('/api/v1/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({
        email,
        origin: window.location.origin,
      }),
    });

    return response.data;
  },

  resetPassword: ({ token, newPassword }) => {
    return apiClient(`/api/v1/auth/reset-password?token=${token}`, {
      method: 'POST',
      body: JSON.stringify({ newPassword }),
    });
  },
};

export { authService };
