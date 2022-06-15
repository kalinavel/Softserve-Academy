// Task 2:

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries 
// the "instructions" for the development and functioning of living organisms.
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// You have function with one side of the DNA (string, except for Haskell); 
// you need to get the other complementary side. DNA strand is never empty or
//  there is no DNA at all (again, except for Haskell).

function getComplementaryDNA(input) {

    let dnaArray = input.split("");
    let newDnaArray = [];

    for (let i = 0; i < dnaArray.length; i++) {
        const dnaCharacter = dnaArray[i];

        if (dnaCharacter == "A") {newDnaArray.push("T")};
        if (dnaCharacter == "T") {newDnaArray.push("A")};
        if (dnaCharacter == "C") {newDnaArray.push("G")};
        if (dnaCharacter == "G") {newDnaArray.push("C")};
    }
    return newDnaArray.join("");
}

console.log(getComplementaryDNA("ATTGC"));
console.log(getComplementaryDNA("GTAT"));

// DNA_strand ("ATTGC") # return "TAACG"
// DNA_strand ("GTAT") # return "CATA"

