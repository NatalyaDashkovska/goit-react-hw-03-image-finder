import React from 'react';
import styles from './Button.module.css';
const Button = () => {
  return <button className={styles.button}>Load more</button>;
};

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });

export default Button;
