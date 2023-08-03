/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them. */

function abbrevName(name){
    const firstLetter = name.toUpperCase().slice(0,1); // ubico la primera letra
    const spacePosition = name.indexOf(' ')+1; // ubico el espacio e indico que requiero el índice que sigue
    const secondLetter = name.toUpperCase().slice(spacePosition, spacePosition + 1); // tomo la letra después del espacio
    return `${firstLetter}.${secondLetter}`
}

console.log(abbrevName('Sam Harris'))
console.log(abbrevName('patrick feeney'))