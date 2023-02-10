const fibonacci = function(n) {
    if(n === 0){
        return 0;
    } else if(n === 1){
        return 1;
    } else if(n < 0){
        return "OOPS";
    } else {
        let a = 0, b = 1, c;
        for(let i = 2; i <= n; i++){
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
};      

// Do not edit below this line
module.exports = fibonacci;
