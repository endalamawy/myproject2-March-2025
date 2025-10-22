
// import axios from 'axios'

// const instance = axios.create({
//     baseURL: "https://api.themoviedb.org/3"
// });

// export default instance;


import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const fetchPopularMovies = async () => {
  const response = await instance.get(`/movie/popular`, {
    params: {
      api_key: import.meta.env.VITE_APP_API_KEY,
      language: "en-US",
      page: 1,
    },
  });
  return response.data;
};

export default instance;
