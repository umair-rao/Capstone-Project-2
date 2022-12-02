const getLikes = async () => {
  try {
    const data = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kkWXlwzBJImy6CW31Zzh/likes',
    );
    const response = await data.json();
    return response;
  } catch (error) {
    return error;
  }
};

export default getLikes;