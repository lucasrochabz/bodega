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

export { POST_LOGIN };
