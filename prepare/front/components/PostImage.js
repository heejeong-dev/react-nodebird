import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImageZoom';

const PostImages = ({ images }) => {
  console.log(images);
  const [showImageZoom, setShowImageZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImageZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImageZoom(false);
  }, [showImageZoom]);

  if (images.length === 1) {
    return (
      <>
        <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
        {showImageZoom && <ImagesZoom image={images} onClose={onClose} />}
      </>
    );
  } else if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          width="50%"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          width="50%"
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
      </>
    );
  } else {
    return (
      <>
        <img
          role="presentation"
          width="50%"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <PlusOutlined />
        <br />
        <p>{images.length - 1} more images</p>
        {showImageZoom && <ImagesZoom image={images} onClose={onClose} />}
      </>
    );
  }
};

export default PostImages;

//role = 'presentation' 이것은 클릭하는 걳이 아님을 나타냄 (접근성))
