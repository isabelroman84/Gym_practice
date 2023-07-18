/* Regresa verdadero si la palabra es un palíndromo. De otra forma, regresa falso. */

/*
function palindrome(str) {
    const strReversed = str.toLowerCase().split('').reverse().join(''); 
    return strReversed === str.toLowerCase() ? true : false;
}
*/

// Con ciclo for

function palindrome(str) {
    for(let i = 0; i < str.length/2; i++) { // recorremos la mitad de la palabra
        // en cada iteración se compara el caracter en posición i con el que está en la posición opuesta (length-1-i), si alguna comparación no concide, es false
        if(str.toLowerCase()[i] !== str.toLowerCase()[str.length - 1 - i]) {
            return false
        } else {
            return true
        }
    }
}

console.log(palindrome('Oso')); 
console.log(palindrome('hola')); 
console.log(palindrome('omo')); 
console.log(palindrome('ReconoceR')); 