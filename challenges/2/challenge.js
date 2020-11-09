/*
 * Números primos
 */

/* ENUNCIADO
 *
 * Você deve fazer um programa que soma o valor de todos
 * os números primos existentes de 1 a n, onde n é dado como
 * parâmetro.
 *
 * Para isso você deve usar a função já escrita de verificação
 * de primalidade.
 *
 * Exemplo:
 * sumPrimes(15) deve retornar 41
 * Solução: Um for para passar do numero 0 até o número N passado por parametro, 
 * utilizando a função isPrime que se retorna true o valor de 'i' é somado a variavel sum
 */

const isPrime = require('../../utils/isPrime')

const sumPrimes = n => {
    let sum = 0
    for(let i = 0; i <= n; i++ )
        if(isPrime(i)){
            sum += i           
        }
    return sum
}

module.exports = sumPrimes
