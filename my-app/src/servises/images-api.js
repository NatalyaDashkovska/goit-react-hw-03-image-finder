import axios from 'axios';

const getLibrary = (key, search, page) => {
  console.log(search);
  console.log(page);
  console.log(key);
  return axios
    .get(
      `https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data);
};

const getImage = (id, key) => {
  return axios
    .get(
      `https://pixabay.com/api/?id=${id}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data);
};

export default { getLibrary, getImage };
