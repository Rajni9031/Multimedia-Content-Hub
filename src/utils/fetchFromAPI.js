import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

export const fetchFromAPI = async (url) => {
  const option = {
    params: {
      maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

  const { data } = await axios.get(`${BASE_URL}/${url}`, option);

  return data;
};
