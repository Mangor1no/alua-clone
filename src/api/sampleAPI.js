import axios from 'axios';

const getRandomImage = () => {
  return axios.get('https://api.thecatapi.com/v1/images/search?limit=3');
};

export default { getRandomImage };
