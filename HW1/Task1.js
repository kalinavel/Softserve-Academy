// Task 1:
// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters 
// and numeric digits that occur more than once in the input string. The input string can be assumed 
// to contain only alphabets (both uppercase and lowercase) and numeric digits.

function countDuplicates(input) {
    
    let splitArray = input.toLowerCase().split("");
    let filteredArray = splitArray.filter((item, index) => splitArray.indexOf(item) !== index);
    return [... new Set(filteredArray)].length;

}

console.log(countDuplicates("abcde"));
console.log(countDuplicates("aabbcde"));
console.log(countDuplicates("aabBcde"));
console.log(countDuplicates("indivisibility"));
console.log(countDuplicates("Indivisibilities"));
console.log(countDuplicates("aA11"));
console.log(countDuplicates("ABBA"));
