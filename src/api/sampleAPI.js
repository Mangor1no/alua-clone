import axios from 'axios';

const getRandomImage = (currentPage) => {
  return axios.get(
    `https://api.unsplash.com/search/photos?query=cat&per_page=99&page=${currentPage}`,
    {
      headers: {
        Authorization: 'Client-ID UQGKD1ITCExGEk1K2awa_tWGb5pQg47tNUOpgooMeBE',
      },
    }
  );
};

export default { getRandomImage };
