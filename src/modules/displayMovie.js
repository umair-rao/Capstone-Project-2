import updatePopUp from './popup.js';

const moviesContainer = document.querySelector('.movies-list');

const getLikes = async () => {
  try {
    const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kkWXlwzBJImy6CW31Zzh/likes');
    const response = await data.json();
    return response;
  } catch (error) {
    return error;
  }
};

export const addLike = async (id) => {
  try {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kkWXlwzBJImy6CW31Zzh/likes', {
      method: 'POST',
      body: JSON.stringify({
        item_id: +id,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const likes = await getLikes();
    document.getElementById(`like-${id}`).innerText = `${likes?.find((i) => +i.item_id === +id)?.likes || 0} likes`;
  } catch (e) {
    return e.message;
  }
  return '';
};

const displayMovie = async (movieList) => {
  moviesContainer.innerHTML = null;
  const likes = await getLikes();
  movieList.forEach((item) => {
    if (item?.id > 10 && item?.id < 20) {
      const movieItem = document.createElement('div');
      movieItem.className = 'movie-item';
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
      like.addEventListener('click', async () => {
        await addLike(item.id);
      });
      like.innerHTML = `
      <i class="fa-regular fa-heart" id="heart"></i>
          <p class="likes" id="like-${item.id}">${likes.find((i) => +i.item_id === +item.id)?.likes || 0} likes</p>`;
      titleLike.appendChild(like);

      movieItem.appendChild(titleLike);

      const commentBtnDiv = document.createElement('div');
      commentBtnDiv.className = 'comments-btn';
      const commentBtn = document.createElement('button');
      commentBtn.className = 'comment-btn';
      commentBtn.innerHTML = 'Comments';
      commentBtn.addEventListener('click', () => {
        updatePopUp(item);
      });
      commentBtnDiv.appendChild(commentBtn);

      movieItem.appendChild(commentBtnDiv);
      moviesContainer.appendChild(movieItem);
    }
  });
};

export default displayMovie;