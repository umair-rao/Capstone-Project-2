import './style.css';
// import displayMovie from './modules/displayMovie.js';

const url = 'https://api.tvmaze.com/shows';

const getMovie = async () => {
  fetch(url,
    { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      displayMovie(data);
    });
};

getMovie();
