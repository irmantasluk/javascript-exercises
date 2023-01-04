const reverseString = function(str) {
    let strArr = str.split("");
    let strReversed = [];
    for(let i = (strArr.length -1); i >= 0; i--) {
        strReversed.push(strArr[i]);
    }
    return strReversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
