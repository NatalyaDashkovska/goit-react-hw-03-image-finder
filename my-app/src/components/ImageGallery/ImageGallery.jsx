import React, { Component } from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';
import PropTypes from 'prop-types';
class ImageGallery extends Component {
  state = {
    showModal: false,
    img: '',
  };
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  getImgForModal = ({ img }) => {
    if (img) {
      this.toggleModal();
      this.setState({
        img,
      });
    }
  };
  render() {
    const { showModal, img } = this.state;
    const { images } = this.props;
    const { largeImageURL } = img;
    return (
      <ul className={styles.gallery}>
        {images.map(item => {
          return (
            <ImageGalleryItem
              key={item.id}
              img={item}
              getImgForModal={this.getImgForModal}
            />
          );
        })}
        {showModal && (
          <Modal hideModal={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
export default ImageGallery;
