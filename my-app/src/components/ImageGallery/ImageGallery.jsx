import React from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGallery';

const ImageGallery = images => {
  return (
    <ul className={styles.gallery}>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem id={id} img={webformatURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;
