import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({
  label,
  type = 'text',
  name,
  id,
  setValue,
  onChange,
  ...props
}) => {
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
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={id}
        onChange={handleChange}
        {...props}
      />
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setValue: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
