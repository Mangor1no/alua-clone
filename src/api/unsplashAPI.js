import axios from 'axios';

const getRandomImage = (currentPage) => {
  return axios.get(
    `https://api.unsplash.com/search/photos?query=cat&per_page=99&page=${currentPage}`,
    {
      headers: {
        Authorization: 'Client-ID UQGKD1ITCExGEk1K2awa_tWGb5pQg47tNUOpgooMeBE',
        'Accept-Version': 'v1',
      },
    }
  );
};

const getUserImages = (username, currentPage, orderBy) => {
  return axios.get(
    `https://api.unsplash.com/users/${username}/photos?page=${currentPage}&per_page=99&order_by=${orderBy}`,
    {
      headers: {
        Authorization: 'Client-ID UQGKD1ITCExGEk1K2awa_tWGb5pQg47tNUOpgooMeBE',
        'Accept-Version': 'v1',
      },
    }
  );
};

export default { getRandomImage, getUserImages };
