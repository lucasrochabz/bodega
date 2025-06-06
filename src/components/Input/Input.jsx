import './Input.css';

const Input = ({ label, id, setValue, onChange, ...props }) => {
  const handleChange = (event) => {
    if (setValue) {
      setValue(event.target.value);
    }
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        className="input"
        id={id}
        name={id}
        onChange={handleChange}
        {...props}
      />
    </>
  );
};

export default Input;
