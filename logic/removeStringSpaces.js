/* Write a function that removes the spaces from the string, then return the resultant string. */

function noSpace(x){
    const space = x.replace(/\s/g, ''); // la regex busca el espacio y lo reemplaza por cadena vacía
    return space
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))