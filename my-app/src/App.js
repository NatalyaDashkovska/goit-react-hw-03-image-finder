import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import imagesApi from './servises/images-api';
class App extends Component {
  state = {
    key: '20431977-9a0c4e5e6a84a634219821f23',

    page: 7,
    images: [],
  };

  componentDidMount() {
    const { key, search, page } = this.state;
    imagesApi
      .getLibrary(key, search, page)
      .then(res => {
        console.log(res.hits);
        this.setState({ images: res.hits });
      })
      .catch(error => console.log(error));
  }
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  render() {
    const { images } = this.state;

    return (
      <div className={'App'}>
        <Searchbar />

        <Button />
      </div>
    );
  }
}

export default App;

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
