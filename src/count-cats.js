const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let result = 0;

    for (let elem of matrix){
        for (let subElem of elem){
            if (subElem === '^^'){
                result++;
            }
        }
    }

    return result;
};