import React, { useState, useRef, useEffect } from 'react';

const ImageToggleOnScroll = ({ primaryImg, accentImg }) => {

  const imageRef = useRef(primaryImg); // initialValue

  const [inView, setInView] = useState(false);

  const isInView = () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
 
  useEffect(() => {
    setInView(isInView()); // state after mounted
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  }

  return (
    <img src={inView ? accentImg : primaryImg} 
      alt='' height="100" width="100" ref={imageRef} />
  )
}

export default ImageToggleOnScroll;