import React, { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.target.nodeName !== 'IMG' || e.code === 'Escape') {
      this.props.hideModal();
    }
  };
  render() {
    return (
      <div className={styles.overlay} onClick={this.closeModal}>
        <div className={styles.modal}>{this.props.children}</div>
      </div>
    );
  }
}
Modal.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Modal;
