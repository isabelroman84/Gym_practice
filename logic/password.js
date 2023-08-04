/* Generar una contraseña aleatoria de 12 caracteres */

function generatePassword(longitud) { // acepta el parámetro longitud de la contraseña
    // se indican todos los caracteres que pueden formar parte de la contraseña
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_';
    // se inicializa password que es la que almacenará la contraseña y por eso debe ser let
    let password = '';

    // el bucle for se ejecutará longitud de veces (las que definamos)
    for(let i = 0; i < longitud; i++) {
        // dentro del bucle se generará un número aleatorio: random (decimal entre 0 y 1) * characters.length para obtener una posición dentro de la cadena, que al redondearse, devolverá un índice válido (numérico)
        const randomIndex = Math.floor(Math.random() * characters.length);
        // esto se va concatenando y con charAt se obtiene el caracter de una posición específica
        password += characters.charAt(randomIndex);
    }
    // retorna la contraseña completa
    return password;
}

/*
// USANDO REGEX
function generatePassword(longitud) { 
    // si hacemos uso de regex, debemos tener en cuenta que no tienen propiedad length
    const charactersRegex = /[A-Za-z0-9!@#$%^&*()-_]/;
    const charactersArray = Array.from(charactersRegex.source)
    let password = '';

    for(let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * charactersArray.length);
        password += charactersArray[randomIndex];
    }
    return password;
}
*/

// Generar una contraseña de 12 caracteres
const newPassword = generatePassword(12);
console.log(newPassword);