import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = ({ fallback }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };
  return <button onClick={handleBack} className="btn-back"></button>;
};

BackButton.propTypes = {
  fallback: PropTypes.string.isRequired,
};

export default BackButton;
