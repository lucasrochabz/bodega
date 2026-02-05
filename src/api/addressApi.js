const GET_ADDRESS_DATA = (zipCode) => {
  return {
    url: `https://viacep.com.br/ws/${zipCode}/json`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
};

export { GET_ADDRESS_DATA };
