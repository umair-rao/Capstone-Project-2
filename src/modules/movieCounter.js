const movieCounter = (arr, element) => {
  element.innerHTML = `Movies(${arr.length})`;
  return element.innerHTML;
};

export default movieCounter;
