import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';

const ImagesZoom = ({ image = [], onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log('image', image);
  return (
    <>
      <header>
        <h1>Detail Image </h1>

        <button onClick={onClose}>X</button>
      </header>
      <div>
        <Slick
          initialSlide={0}
          afterChange={(slide) => setCurrentSlideSlide(slide)}
          infinite
          arrows={false}
          slidesToScroll={1}
          slidesToShow={1}>
          {image.map((v) => (
            <div key={v.src}>
              <img src={v.src} alt={v.src} />
            </div>
          ))}
        </Slick>
      </div>
    </>
  );
};

ImagesZoom.prototype = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired
};

export default ImagesZoom;
