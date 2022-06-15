// Task 1:
// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters 
// and numeric digits that occur more than once in the input string. The input string can be assumed 
// to contain only alphabets (both uppercase and lowercase) and numeric digits.

function countDuplicates(input) {

    let oneCharacterArray = input.toLowerCase().split("");
    let countObj = {};

    oneCharacterArray.forEach(element => {
        countObj[element] = (countObj[element] || 0) + 1;
    });
    
    return countObj;
}

console.log(countDuplicates("indivisibility"));
