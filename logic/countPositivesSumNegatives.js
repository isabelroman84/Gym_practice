/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array. */

function countPositivesSumNegatives(arr) {
    if(arr === null || arr.length === 0) { // si la entrada es null, o tiene 0 elementos
        return []; // devuelve array vacío
    }
    let countPositives = 0; // se inicializa acumulador para contar los números positivos
    let sumNegatives = 0; // se inicializa contador para sumar los números negativos
    for(let i = 0; i < arr.length; i++) { // se recorre el array
        if(arr[i] > 0) { 
            countPositives++ // se cuentan los positivos
        } else if(arr[i] < 0) {
            sumNegatives += arr[i] // se suman los negativos
        } 
    }
    return [countPositives, sumNegatives]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]
console.log(countPositivesSumNegatives([0])) // [0, 0]