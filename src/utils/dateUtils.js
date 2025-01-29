const formattedDate = (rawDate) => {
  if (!rawDate) return 'Data inválida';

  const date = new Date(rawDate);

  if (isNaN(date)) return 'Data inválida';

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};

const setDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
};

export { formattedDate, setDate };
