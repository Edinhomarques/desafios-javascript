/*
 * Requisição na API e componente de Loading
 */

/* ENUNCIADO
 *
 * Neste exercício você deverá escrever  uma função que faz
 * uma requisição para nossa API. Em uma aplicação real,
 * essa função seria chamada no início da renderização de
 * uma página web.
 * Como se trata de um fluxo assíncrono, é necessário que
 * o usuário saiba que esses dados estão sendo carregados,
 * para tanto você deve ativar uma componente de
 * "Carregando" através da função setLoading.
 *
 * Para usar essa função basta chamar em seu código:
 * setLoading(true), para abrir essa componente e
 * setLoading(false), para fechá-la.
 *
 * Uma vez que você obtiver os dados, você deve armazená-
 * los através de uma função setData.
 *
 * Em caso de erro, você deve abrir uma componente de
 * erro, através da função setError, que funciona analoga-
 * mente à função de loading.
 *
 * Para fazer a request, use nossa função chamada api, na
 * forma api().then()...
 *
 * 
 * Solução primeiro usando o setLoading para true, usei a api().then() para fazer a requisição
 * e setando o dado da resposta usando a função setData()
 * após o setData usei o setLoading(false) para fechar a o loading.
 * para os tratamento de erro usei o cath para setar para true caso exista algum erro,
 * se não existir erro uso o setError dentro do then com o valor false
 * 
 * - Uma outra forma de fazer seria usando Async Await criei a função "doRequestWithAsyncAwait" para exemplificar
 * */

const { setData, setError, setLoading } = require('../../utils/stateHandlers')
const api = require('../../utils/api') // Promise

const doRequest = () => {
    setLoading(true)
    api().then(responseData => {
        setData(responseData)
        setLoading(false)
        setError(false)
    }).catch(() => setError(true))

}
// Usando async Await
// const doRequestWithAsyncAwait = async () => {
//     setLoading(true)
//     try {
//         const response = await api();
//         setData(response)
//         setLoading(false)
//         setError(false)
        
//     } catch (error) {
//         setError(true)
        
//     }

// }
// doRequestWithAsyncAwait()
module.exports = doRequest
