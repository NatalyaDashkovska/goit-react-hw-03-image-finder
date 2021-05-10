import axios from 'axios';
const key = '20431977-9a0c4e5e6a84a634219821f23';
const getLibrary = (search, page) => {
  // console.log(search);
  return axios
    .get(
      `https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getLibrary };
