const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string'){
    return false;
  }

  let age = Number(sampleActivity);
  let result = Math.log((MODERN_ACTIVITY / age) / (Math.log(2) / HALF_LIFE_PERIOD));

  if (Number.isNaN(result) || result <= 0 || result > HALF_LIFE_PERIOD || result == null || result == Infinity || result == undefined){
    return false;
  }

  return Math.ceil(result);
};
