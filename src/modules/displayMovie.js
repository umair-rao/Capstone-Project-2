const movieItem = document.querySelector('.movie-item');

const displayMovie = (movieList) => {
  const newMovie = movieList.map((item) => {
    if (item.id > 0 && item.id < 10) {
      const movieCard = document.createElement('div');
      movieCard.className = 'movie-card';
      const movieImage = document.createElement('img');
      movieImage.src = item.image.medium;
      movieCard.appendChild(movieImage);
      movieItem.appendChild(movieCard);

      const titleLike = document.createElement('div');
      titleLike.className = 'title-like';
      const title = document.createElement('p');
      title.className = 'movie-title';
      title.innerHTML = `${item.name}`;

      titleLike.appendChild(title);

      const like = document.createElement('div');
      like.className = 'like-counter';
      like.innerHTML = `
      <i class="fa-regular fa-heart" id="heart"></i>
          <p class="likes">5 likes</p>`;
      titleLike.appendChild(like);

      movieItem.appendChild(titleLike);

      const commentBtnDiv = document.createElement('div');
      commentBtnDiv.className = 'comments-btn';
      const commentBtn = document.createElement('button');
      commentBtn.className = 'comment-btn';
      commentBtn.innerHTML = 'Comments';
      commentBtnDiv.appendChild(commentBtn);

      movieItem.appendChild(commentBtnDiv);
    }
  });
};

export default displayMovie;