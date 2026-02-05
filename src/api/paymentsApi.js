import { BASE_API_URL } from '../config';

const POST_CHECKOUT = (body) => {
  return {
    url: `${BASE_API_URL}/api/v1/payments/checkout`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export { POST_CHECKOUT };
