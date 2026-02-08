export const request = async (url, options = {}) => {
  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message || 'Erro na requisição.');
  }

  return json;
};
