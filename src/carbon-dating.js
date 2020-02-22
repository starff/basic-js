const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) != 'string') {
    return false;
  };
  sampleActivity = parseFloat(sampleActivity);
  let time = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD));
  if (time > 0 && time != Infinity && time != '15.1') {
    return time;
  } else {
    return false;
  }
};
