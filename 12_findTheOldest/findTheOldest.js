const findTheOldest = function(person) {
    let oldest = 0; 
    let age = 0;
    let date = new Date();
    let currentYear = date.getFullYear();

    for (let i = 0; i < person.length; i++) {
        if (age < ((person[i].yearOfDeath || currentYear) - person[i].yearOfBirth)){
            age = (person[i].yearOfDeath || currentYear) - person[i].yearOfBirth;
            oldest = i;
        }
    }
    return person[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
