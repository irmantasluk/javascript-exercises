const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((acc, currVal) => acc + currVal, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, currVal) => acc * currVal, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
  let result = num;
	if(num == 0 || num == 1){
    return 1
  }
  // while(num > 1){
  //   num--;
  //   result *= num;
  // }
  // return result;

  for(i = num; i > 1; i--){
    result *= (i - 1);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
