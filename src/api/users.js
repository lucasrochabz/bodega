import { BASE_API_URL } from '../config';

const POST_USERS = (body) => {
  return {
    url: `${BASE_API_URL}/api/v1/users`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

const PUT_USER_UPDATE = (token, body) => {
  return {
    url: `${BASE_API_URL}/api/v1/users/update`,
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
};

export { POST_USERS, PUT_USER_UPDATE };
