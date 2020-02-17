module.exports = function repeater(str, options) {
    let result = '';
    if (options.separator == undefined) {
      options.separator = '+';
    };
    if (options.addition === undefined) {
      options.addition = '';
    };
    if (options.addition == null) {
      options.addition = 'null';
    };
    if (options.repeatTimes == undefined) {
      options.repeatTimes = 1;
    };
    if (options.additionSeparator == undefined) {
      options.additionSeparator == '';
    };
    if (options.additionRepeatTimes == undefined) {
      options.additionRepeatTimes = 1;
    };
    for(let i = 0; i < options.repeatTimes; ++i) {
      result = result + str;
      for(let k = 0; k < options.additionRepeatTimes; ++k) {
        result =result + options.addition;
        if (k != options.additionRepeatTimes - 1) {
          result = result + options.additionSeparator;
          };
      };
      if (i != options.repeatTimes - 1) {
        result = result + options.separator;
        };
      };
      
    return result;
};
  