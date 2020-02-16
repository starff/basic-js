module.exports = function transform(arr) {
  let result = [];
  let helper = 0;
    if(Array.isArray(arr)) {
      if (arr.length == 0 ) {
        return arr;
      } else {
        arr.forEach((item, index) => {
            if (item === '--discard-next' ) {
              helper = 1;
            } else if (item === '--discard-prev') {
              if (index > 0) {
                result.pop();
              };
            } else if (item === '--double-next') {
              if (index < arr.length - 1) {
                result.push(arr[index + 1]);
              };
            } else if (item === '--double-prev') {
              if (index > 0) {
                result.push(arr[index - 1]);
              };
            } else if (helper == 1) {
              helper = 0;
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
