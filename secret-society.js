/* Un grupo de amigos ha decidido iniciar una sociedad secreta. El nombre de la sociedad será la primera letra de cada uno de ellos, ordenados alfabéticamente. 
Crear una función que tome una serie de nombres y retorne el nombre de la sociedad secreta. */

function societyName(friends) {
    let firstLetter = ''; // inicializo el acumulador
    for(let i = 0; i < friends.length; i++){
        // recorro el array y concateno en el acumulador el primer índice de cada palabra
        firstLetter += friends[i][0];
    }
    // para ordenar alfabéticamente, convierto la cadena en un array y lo ordeno. Para unir la cadena nuevamente utilizo join
    const sortName = firstLetter.split('').sort().join('') // une 
    // las comillas como argumento indican que no se debe usar ningún separador entre los elementos
    return sortName;
}

console.log(societyName(['Miguel', 'Isabel', 'James']))
console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]))
console.log(societyName(["Harry", "Newt", "Luna", "Cho"]))