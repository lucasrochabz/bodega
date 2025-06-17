import { useEffect } from 'react';

const Head = (props) => {
  useEffect(() => {
    document.title = 'Bodega | ' + props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description);
  }, [props]);

  return null;
};

export default Head;
