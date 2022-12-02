const commentCounterFunction = () => {
  let noOfComments = 0;
  const commentList = document.querySelector('.comments');
  noOfComments = commentList.childElementCount;
  return noOfComments;
};

export default commentCounterFunction;
