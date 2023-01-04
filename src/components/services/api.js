import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '30787461-ba0c148aaad98f08ab67703d7';
const PER_PAGE = 12;


axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
    key: API_KEY,
    per_page: PER_PAGE,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
}

export const getImages = async (query, page) => {
  const config = {
    params: {
      q: query,
      page: page,
    },
  };
  const response = await axios.get('', config);
  return response.data;
};