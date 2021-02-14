const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  const SECONDS_IN_HOUR = 3600;
  let seconds = Math.floor(turns / (turnsSpeed / SECONDS_IN_HOUR));
  return {turns, seconds};
};
