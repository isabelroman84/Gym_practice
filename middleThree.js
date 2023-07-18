/* Dada una cadena de longitud impar, devuelva una cadena de longitud 3 desde su centro, por lo que "Candy" produce "and". La longitud de la cadena será de al menos 3. */

function middleThree(str) {
   const middleWord = Math.floor(str.length/2) // encuentro la mitad de la palabra
   return str.substring(middleWord - 1, middleWord + 2) // devuelve la parte que se indica (-1 antes y +2 después)
}

console.log(middleThree('Candy'))
console.log(middleThree('and'))
console.log(middleThree('solving'))
