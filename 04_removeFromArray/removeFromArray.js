const removeFromArray = function(array, ...args) {

    for(const arg of args){
        array = array.filter(item => item !== arg);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
