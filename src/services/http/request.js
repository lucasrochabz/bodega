let isUnauthorized = null;

export const setHandler = (handler) => {
  isUnauthorized = handler;
};

export const request = async (url, options = {}) => {
  const response = await fetch(url, options);

  let json = null;

  try {
    json = await response.json();
  } catch (error) {
    console.warn('Não foi possível ler o JSON da resposta', error);
    json = null;
  }

  if (!response.ok) {
    if (response.status === 401 && isUnauthorized) {
      isUnauthorized();
    }

    const errorMessage =
      json?.message || `Erro ${response.status} na requisição`;
    throw new Error(errorMessage);
  }

  return json;
};
