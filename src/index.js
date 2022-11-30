import './style.css'
import displayMovie from './modules/displayMovie.js';

const url = 'https://api.tvmaze.com/shows';

const getMovie = async () => {
  const images = fetch(url,
    { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      // const movieList = data;
      displayMovie(data);
    });
};

getMovie();