import { BASE_API_URL } from '../config';

const POST_USERS = (payload) => {
  return {
    url: `${BASE_API_URL}/api/v1/users`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  };
};

const PATCH_USER_UPDATE = (token, payload) => {
  return {
    url: `${BASE_API_URL}/api/v1/users/update`,
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    },
  };
};

export { POST_USERS, PATCH_USER_UPDATE };
