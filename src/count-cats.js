module.exports = function countCats(matrix) {
  let arr = [].concat(...matrix);
  let cats = arr.filter(item => item == "^^");
  return cats.length;
};
