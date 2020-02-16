module.exports = function getSeason(season) {
  
  if(season == undefined) {
    return 'Unable to determine the time of year!';
  } else if(typeof season != 'object') {
    throw new Error;
  };
  let month = season.getMonth();
  if(month < 2) {
    return 'winter';
  } else if (month >= 2 && month < 5) {
    return 'spring';
  } else if (month >= 5 && month < 8) {
    return 'summer';
  } else if (month >= 8 && month < 11) {
    return 'autumn';
  } else {
    return 'winter';
  }
};
