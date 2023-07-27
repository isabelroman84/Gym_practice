/* You get an array of numbers, return the sum of all of the positives ones. */

function positiveSum(arr) {
    let sum = 0; // como quiero sumar inicializo un contador
    for(let i = 0; i < arr.length; i++) { // recorro el array 
        if(arr[i] > 0) { // los que cumplan la condición (número positivo)
            sum += arr[i] // se van sumando 
        }
    }
    return sum // se retorna la suma
}

console.log(positiveSum([1,-4,7,12]))
console.log(positiveSum([1,2,3,4,5]))