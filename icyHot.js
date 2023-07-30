/* Given two temperatures, return true if one is less than 0 and the other is greater than 100. */

function icyHot(temp1, temp2){
    return (temp1 < 0 && temp2 > 100 || temp1 > 0 && temp2 < 100) ? true : false
}

console.log(icyHot(120, -1))
console.log(icyHot(-1, 120))
console.log(icyHot(2, 120))