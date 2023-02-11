const findTheOldest = function(people) {
    // curYear = new Date().getFullYear();
    // let age = 0;
    // let oldest = {};
    // people.forEach(person => {
    //     if(person.yearOfDeath){
    //         if(person.yearOfDeath - person.yearOfBirth > age){
    //             age = person.yearOfDeath - person.yearOfBirth;
    //             oldest = person;
    //         }
    //     } else {
    //         if(curYear - person.yearOfBirth > age){
    //             age = curYear - person.yearOfBirth;
    //             oldest = person;
    //         }
    //     }
    // });
    // return oldest;

    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const currentAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
        return oldestAge > currentAge ? oldest : currentPerson;
    });
    
    function getAge(yearOfDeath, yearOfBirth){
        if(!yearOfDeath){
            yearOfDeath = new Date().getFullYear();
        }
        return yearOfDeath - yearOfBirth;
    }
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
