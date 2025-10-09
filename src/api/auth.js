import { BASE_API_URL } from '../../config';

const POST_LOGIN = (body) => {
  return {
    url: `${BASE_API_URL}/api/v1/auth/login`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

const POST_RESET_PASSWORD = ({ token, newPassword }) => {
  return {
    url: `${BASE_API_URL}/api/v1/auth/reset-password?token=${token}`,
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newPassword }),
    },
  };
};

export { POST_LOGIN, POST_RESET_PASSWORD };
