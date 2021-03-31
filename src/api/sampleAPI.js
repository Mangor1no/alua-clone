import axios from 'axios';

const getRandomImage = (currentPage) => {
  return axios.get(
    `https://api.unsplash.com/search/photos?query=sexy&per_page=25&page=${currentPage}`,
    {
      headers: {
        Authorization: 'Client-ID UQGKD1ITCExGEk1K2awa_tWGb5pQg47tNUOpgooMeBE',
      },
    }
  );
};

export default { getRandomImage };
