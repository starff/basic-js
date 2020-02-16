module.exports = function transform(arr) {
  let result = [];
    if(Array.isArray(arr)) {
      if (arr.length == 0 ) {
        return arr;
      } else {
        arr.forEach((item, index) => {
            if (item === '--discard-next') {
              index++;
              index++;
            } else if (item === '--discard-prev') {
              if (index != 0) {
                result.pop();
              } 
            } else if (item === '--double-next') {
              result.push(arr[index + 1])
            } else if (item === '--double-prev') {
              result.push(arr[index - 1])
            } else {
              result.push(item);
            };
        });
      } 
    } else {
      throw new Error;
    }
    return result;
};
