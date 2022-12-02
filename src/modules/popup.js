import addCommentHandler from './postComment.js';
import commentCounterFunction from './commentCounter.js';

const commentHeadingDiv = document.createElement('div');
commentHeadingDiv.className = 'comments-heading';
const commentCountShow = document.createElement('h3');
commentCountShow.className = 'popup-headings';

commentHeadingDiv.appendChild(commentCountShow);
const fetchComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kkWXlwzBJImy6CW31Zzh/comments?item_id=${id}`;
  const response = await fetch(url);
  const data = await response.json();
  const comments = document.querySelector('.comments');
  comments.innerHTML = null;
  data.forEach((item) => {
    const showComment = document.createElement('p');
    showComment.innerText = `${item.creation_date} ${item.username} : ${item.comment}`;
    comments.appendChild(showComment);
  });
  const commentCount = commentCounterFunction();
  commentCountShow.innerHTML = `Comments (${commentCount})`;
  return data;
};
const updatePopUp = (movie) => {
  commentCountShow.innerHTML = null;
  const popup = document.querySelector('.popup-window');
  popup.style.display = 'block';
  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';
  const crossIcon = document.createElement('div');
  crossIcon.className = 'cross-icon';
  crossIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  popupContent.appendChild(crossIcon);

  crossIcon.addEventListener('click', () => {
    popup.style.display = 'none';
    popupContent.remove();
  });

  const popupImageDiv = document.createElement('div');
  popupImageDiv.className = 'popup-image';

  const popupImage = document.createElement('img');
  popupImage.src = movie.image.medium;

  popupImageDiv.appendChild(popupImage);
  popupContent.appendChild(popupImageDiv);

  const popupHeading = document.createElement('h2');
  popupHeading.className = 'popup-headings';

  popupHeading.innerHTML = `${movie.name}`;

  popupContent.appendChild(popupHeading);

  const movieDetails = document.createElement('div');
  movieDetails.className = 'movie-details';
  movieDetails.innerHTML = `
    <p id='details-child'>Genres: ${movie.genres}</p>
    <p id='details-child'>Rating: ${movie.rating.average}</p>
    <p id='details-child'>Language: ${movie.language}</p>`;

  popupContent.appendChild(movieDetails);

  const commentSection = document.createElement('div');
  commentSection.className = 'comments-section';

  commentSection.appendChild(commentHeadingDiv);

  const comments = document.createElement('div');
  comments.className = 'comments';
  commentSection.appendChild(comments);

  const addComment = document.createElement('div');
  addComment.className = 'add-comment';

  const commentHeading = document.createElement('h3');
  commentHeading.className = 'popup-headings';
  commentHeading.innerHTML = 'Add a comment';

  addComment.appendChild(commentHeading);

  const commentForm = document.createElement('form');
  commentForm.className = 'comment-form';

  const nameInput = document.createElement('input');
  nameInput.placeholder = 'Your Name';
  const commentInput = document.createElement('input');
  commentInput.placeholder = 'Your insights';
  const commentDate = new Date();

  commentForm.appendChild(nameInput);
  commentForm.appendChild(commentInput);
  addComment.appendChild(commentForm);

  const commentSubmitButton = document.createElement('button');
  commentSubmitButton.className = 'submit-comment-btn';
  commentSubmitButton.type = 'submit';

  commentSubmitButton.innerHTML = 'Comment';

  commentForm.appendChild(commentSubmitButton);
  commentSection.appendChild(addComment);
  popupContent.appendChild(commentSection);
  popup.appendChild(popupContent);

  fetchComments(movie.id);
  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (nameInput.value && commentInput.value) {
      const commentObj = {
        item_id: movie.id,
        date: commentDate,
        username: nameInput.value,
        comment: commentInput.value,
      };

      addCommentHandler(commentObj).then(async (res) => {
        if (res) {
          await fetchComments(movie.id);
        }
      });
      commentForm.reset();
    }
  });
};

export default updatePopUp;
