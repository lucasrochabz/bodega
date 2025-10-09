import PropTypes from 'prop-types';
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

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setValue: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
