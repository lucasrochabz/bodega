import { BASE_API_URL } from '../config';

const GET_ME = (token) => {
  return {
    url: `${BASE_API_URL}/api/v1/auth/me`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

const POST_LOGIN = (payload) => {
  return {
    url: `${BASE_API_URL}/api/v1/auth/login`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  };
};

const POST_FORGOT_PASSWORD = ({ email, origin }) => {
  return {
    url: `${BASE_API_URL}/api/v1/auth/forgot-password`,
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, origin }),
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

export { GET_ME, POST_LOGIN, POST_FORGOT_PASSWORD, POST_RESET_PASSWORD };
