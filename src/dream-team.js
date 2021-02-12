const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)){
    return false;
  }

  let array = [];

  for (let member of members){
    if (typeof(member) === 'string'){
      let elem = member.trim();
      array.push(elem[0].toUpperCase());
    }    
  }

  return array.sort().join('');  
};
