// Task 3:
// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function shortestWord(strWords) {

    let stringArray = strWords.split(" ");
    
    stringArray.sort((a, b) => {
          return a.length - b.length;
        })
        return stringArray[0].length;
}

console.log(shortestWord("bitcoin take over the world maybe who knows perhaps"));
console.log(shortestWord("turns out random test cases are easier than writing out basic ones"));
