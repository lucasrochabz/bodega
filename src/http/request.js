// fix: api considera que sempre retorna um arquivo json se 204, html, res vazio, erro de parsing quebra
let isUnauthorized = null;

export const setHandler = (handler) => {
  isUnauthorized = handler;
};

export const request = async (url, options = {}) => {
  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    if (response.status === 401 && isUnauthorized) {
      isUnauthorized();
    }

    throw new Error(json.message || 'Erro na requisição.');
  }

  return json;
};
