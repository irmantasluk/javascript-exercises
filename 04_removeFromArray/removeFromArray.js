const removeFromArray = function(array, ...args) {

    let filteredArray = [];
    for(const arg of args){
        array = array.filter(item => item !== arg);
    }
    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
