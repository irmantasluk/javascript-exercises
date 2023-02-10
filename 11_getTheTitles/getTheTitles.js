const getTheTitles = function(books) {
    // let titles = [];
    // books.forEach((book) => { titles.push(book.title) });
    // return titles;
    return books.map((book) => book.title);
};
 getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
