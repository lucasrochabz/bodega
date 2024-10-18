import './InputField.css';

export const InputField = ({
  name,
  label,
  type,
  placeholder,
  isReadOnly,
  onChange,
  value,
}) => {
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
      />
    </div>
  );
};
