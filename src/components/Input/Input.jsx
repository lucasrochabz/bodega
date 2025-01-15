import './Input.css';

export const Input = ({ label, id, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        className="input"
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};
