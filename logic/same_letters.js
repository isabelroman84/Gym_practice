/* Dada una oración, retorna el número de palabras cuya primera y última letra sean iguales. */

function countSameLetters(str) {
    const words = str.toLowerCase().split(' '); // indentificador para separar por palabras el string
    let count = 0; // siempre se inicializa contador
    for(let i = 0; i < words.length; i++) {
        const word = words[i].replace(/[^A-Za-z]/g, ''); // que no se cuenten caracteres no alfabéticos
        // que la palabra sea mayor o igual a 2 y que primera y última sean iguales
        if(word.length >= 2 && word[0] === word[word.length-1]) {
            count++
        }
    }
    return count;
}

console.log(countSameLetters("No Pop! I am not in a gang, Eve with sbelts"));