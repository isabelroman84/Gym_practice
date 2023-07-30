/* Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0). */

function comboString(a, b) {
    if(a.length < b.length) {
        return a + b + a
    } else if (a.length > b.length) {
        return b + a + b
    }
}

console.log(comboString('Hello', 'hi'))
console.log(comboString('Hi', 'Hello'))
console.log(comboString('aaa', 'b'))