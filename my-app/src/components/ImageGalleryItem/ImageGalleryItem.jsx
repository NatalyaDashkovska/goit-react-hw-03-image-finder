import React from 'react';
import styles from './ImageGalleryItem';

<li className="ImageGalleryItem">
  <img src="" alt="" className="ImageGalleryItem-image" />
</li>;

const ImageGalleryItem = (id, img) => {
  return (
    <li key={id} className={styles.item}>
      <img src={img} alt="" className={styles.image} />
    </li>
  );
};

export default ImageGalleryItem;
