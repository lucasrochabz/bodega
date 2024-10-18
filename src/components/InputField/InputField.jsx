import './InputField.css';

export const InputField = ({ label, name, type }) => {
  return (
    <div className="input-field">
      <label htmlFor={label}>{name}</label>
      <input type={type} id={label} name={label} />
    </div>
  );
};
