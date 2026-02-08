import { BASE_API_URL } from '../config';

const POST_CHECKOUT = (payload) => {
  return {
    url: `${BASE_API_URL}/api/v1/payments/checkout`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  };
};

export { POST_CHECKOUT };
