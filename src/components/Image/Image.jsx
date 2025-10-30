import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Image.module.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={`${styles.skeleton} skeleton`}></div>}
      <img
        onLoad={handleLoad}
        className={styles.imgContent}
        alt={alt}
        {...props}
      />
    </div>
  );
};

Image.propTypes = {
  alt: PropTypes.string(),
};

export default Image;
