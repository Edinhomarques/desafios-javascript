/*
 * Somar os argumentos
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que some
 * todos os argumentos providos.
 * Solução: Usando a o spread operator para a função aceitar N argumentos e
 *  função reduce para somar todos os argumentos passados
 */

const sumArguments = (...arr) => {
    return sumArgs = arr.reduce((acc, crr) => {
        return acc + crr
    })
}

module.exports = sumArguments
