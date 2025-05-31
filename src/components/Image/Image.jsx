import './Image.css';

import React, { useState } from 'react';

export const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <div className="wrapper">
      {skeleton && <div className="skeleton"></div>}
      <img onLoad={handleLoad} className="img-content" alt={alt} {...props} />
    </div>
  );
};
