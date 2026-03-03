import { apiClient } from '../http/client';

const usersService = {
  signup: (payload) => {
    return apiClient('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  update: (token, payload) => {
    return apiClient('/api/v1/users/update', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
  },
};

export { usersService };
