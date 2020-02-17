module.exports = function repeater(str, options) {
    let result = '';
    if (options.separator == undefined) {
      options.separator = '+';
    };
    if (options.addition == undefined) {
      options.addition = '';
    };
    if (options.repeatTimes == undefined) {
      options.repeatTimes = 1;
    };
    if (options.additionSeparator == undefined) {
      options.additionSeparator == '';
    } 
    for(let i = 0; i < options.repeatTimes; ++i) {
      result = result + str + options.addition;
      
      if (i != options.repeatTimes - 1) {
        result = result + options.separator;
        };
      };
      
    return result;
};
  