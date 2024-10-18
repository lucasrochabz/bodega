import { forwardRef } from 'react';
import './InputField.css';

export const InputField = forwardRef(
  ({ name, label, type, placeholder, isReadOnly, onChange, value }, ref) => {
    return (
      <div className="input-field">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          readOnly={isReadOnly}
          onChange={onChange}
          value={value}
          ref={ref}
        />
      </div>
    );
  },
);
