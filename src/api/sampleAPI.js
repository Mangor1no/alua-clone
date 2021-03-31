import axios from 'axios';

const getRandomImage = () => {
  return axios.get('https://api.thecatapi.com/v1/images/search?limit=33');
};

export default { getRandomImage };
