import PropTypes from 'prop-types';

export const userPropTypes = PropTypes.shape({
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const productPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image_path: PropTypes.string.isRequired,
});

export const addressPropType = PropTypes.shape({
  street: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  neighborhood: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip_code: PropTypes.string.isRequired,
});
