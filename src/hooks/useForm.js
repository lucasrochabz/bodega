import { useState } from 'react';

const typesFields = {
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Preencha um email válido.',
  },
};

export const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const validate = (value) => {
    if (type === false) {
      return true;
    }

    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (typesFields[type] && !typesFields[type].regex.test(value)) {
      setError(typesFields[type.message]);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (error) {
      validate(target.value);
    }

    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
