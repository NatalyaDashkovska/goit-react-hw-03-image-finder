import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import './index.css';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import imagesApi from './servises/images-api';
class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (searchQuery !== prevState.searchQuery && searchQuery !== '') {
      this.fetchImg();
    } else if (
      searchQuery === prevState.searchQuery &&
      page !== prevState.page
    ) {
      this.fetchImg();
    }
  }
  onChangeSearch = ({ search }) => {
    this.setState({ searchQuery: '', page: 1, images: [] });
    this.setState({ searchQuery: search, page: 1, images: [] });
  };
  fetchImg = (prevProps, prevState) => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });
    // console.log(searchQuery);
    imagesApi
      .getLibrary(searchQuery, page)
      .then(res => {
        // console.log(res);
        this.setState(prevState => ({
          images: [...prevState.images, ...res.hits],
        }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  loadMore = e => {
    e.preventDefault();

    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    const { images, isLoading } = this.state;

    return (
      <div className={'App'}>
        <Searchbar onSubmit={this.onChangeSearch} />

        <ImageGallery images={images} />
        {isLoading && (
          <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
        )}
        {images.length > 0 && !isLoading && <Button page={this.loadMore} />}
      </div>
    );
  }
}
// this.setState({ images: res.hits });
export default App;

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
