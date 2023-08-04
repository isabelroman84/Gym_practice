/* Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more. */

function firstLast6(arr) {
    for(let i = 0; i < arr.length; i++) { // recorremos array para validar cada elemento
        return (arr[0] === 6 || arr[arr.length - 1] === 6) ? true : false // condición: índice 0 y último = 6
    }
}

console.log(firstLast6([1, 2, 6]))
console.log(firstLast6([6, 1, 2, 3]))
console.log(firstLast6([13, 6, 1, 2, 3]))
