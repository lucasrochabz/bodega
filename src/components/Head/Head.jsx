import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Head = ({ title, description }) => {
  useEffect(() => {
    document.title = 'Bodega | ' + title;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', description);
  }, [title, description]);

  return null;
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Head;
