/* Se tienen dos arreglos de números enteros, a y b, cada uno de longitud dos. Calcule la suma de los valores de cada arreglo. Devuelva el array que tenga la mayor suma. En caso de empate, devuelva el arreglo a. */
/*
function biggerTwo(a, b){
    let sumA = 0;
    let sumB = 0;
    for (let i = 0; i < a.length; i++) {
        sumA += a[i]
    }
    for (let i = 0; i < b.length; i++) {
      sumB += b[i] 
    } if (sumA > sumB) { // necesito que compare la suma de cada array
    return a // necesito que retorne el array y no la suma
    } else if (sumA < sumB) {
    return b
    } else {
    return a
    }  
  }
*/
/* El código se puede optimizar con reduce
reduce recibe dos parámetros acc (acumulador que mantiene el resultado de las operaciones realizadas hasta el momento mientras se recorre el array) y curr (valor actual del elemento del array que se está procesando en la iteración actual) */

function biggerTwo(a, b) {
    const sumA = a.reduce((acc, curr) => acc + curr, 0);
    const sumB = b.reduce((acc, curr) => acc + curr);
    return sumA >= sumB ? a : b
}

console.log(biggerTwo([1, 2], [3, 4]))
console.log(biggerTwo([3, 4], [1, 2]))
console.log(biggerTwo([1, 1], [1, 2]))