const addComment = async (Obj) => {
  const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kkWXlwzBJImy6CW31Zzh/comments';
  const data = await fetch(commentUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Obj),
  });
  const response = await data.text;
  return response;
};

export default addComment;