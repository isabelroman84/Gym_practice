/* Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over. */

function blackjack(a, b) {
    if(a && b < 0) {
        return 0
    } else if(a <= 21 && b <= 21) {
        return Math.max(a, b)
    } else if(a <= 21 && b >= 21) {
        return a
    } else if(a >= 21 && b <= 21) {
        return b
    } else {
        return 0
    }
}

console.log(blackjack(12, 18))
console.log(blackjack(19, 21))
console.log(blackjack(21, 19))
console.log(blackjack(19, 22))
console.log(blackjack(-19, -22))