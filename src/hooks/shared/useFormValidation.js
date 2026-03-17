import { useState } from 'react';

export const useFormValidation = (schema, onSubmit, initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setErrors({});

      await schema.validate(values, { abortEarly: false });

      await onSubmit(values);
    } catch (err) {
      const validationErrors = {};

      err.inner?.forEach((error) => {
        if (!validationErrors[error.path]) {
          validationErrors[error.path] = error.message;
        }
      });

      setErrors(validationErrors);
    }
  };
  return { values, errors, handleChange, handleSubmit };
};
