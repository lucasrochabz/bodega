import './InputField.css';

export const InputField = ({ label, name }) => {
  return (
    <div className="input-field">
      <label htmlFor={label}>{name}</label>
      <input type="text" id={label} name={label} />
    </div>
  );
};
