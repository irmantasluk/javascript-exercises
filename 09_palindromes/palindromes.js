const palindromes = function (string) {
    // let strCleaned= string
    //     .toLowerCase()
    //     .replace( /[^a-zA-Z ]/g, '')
    //     .replace( /\s\s+/g, ' ' )
    //     .split(' ');

    // const strRegular = strCleaned.join('');
    // let strReversed ="";

    // for(let i = strRegular.length -1; i >= 0; i--){
    //     strReversed += strRegular[i];
    // }

    // return strRegular === strReversed ? true : false;

    const processedString = string.toLowerCase().replace(/[^a-z]/g, "");

    return processedString
        .split('')
        .reverse()
        .join('') == processedString;
};

palindromes("asde ared , sfdsg.")

// Do not edit below this line
module.exports = palindromes;
