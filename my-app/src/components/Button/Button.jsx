import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';
const Button = ({ page }) => {
  return (
    <button type="button" className={styles.button} onClick={page}>
      Load more
    </button>
  );
};
Button.propTypes = {
  page: PropTypes.func.isRequired,
};
// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });

export default Button;
