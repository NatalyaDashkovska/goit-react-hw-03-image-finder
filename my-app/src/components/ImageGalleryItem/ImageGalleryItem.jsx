import React from 'react';
import styles from './ImageGalleryItem';
import PropTypes from 'prop-types';
const ImageGalleryItem = ({ img, getImgForModal }) => {
  const { webformatURL } = img;

  return (
    <li className={styles.item}>
      <img
        src={webformatURL}
        alt=""
        className={styles.image}
        onClick={() => getImgForModal({ img })}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
  getImgForModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
