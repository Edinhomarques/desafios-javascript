/*
 * Normalização de estruturas
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que realize a
 * normalização da estrutura representada pela variável input de
 * forma que o retorno seja compatível com a variável output
 *
 */

/*
 * [INPUT] Object
 * {
 *   "id": "6197b77e-3942-11ea-a137-2e728ce88125",
 *   "user": {
 *     "id": "6197ba94",
 *     "name": "Laura"
 *   },
 *   "reports": [
 *     {
 *       "id": "51ddf1a9",
 *       "result": {
 *         "document": "356.4325-10",
 *         "status": "em análise",
 *       }
 *     }
 *   ]
 * }
 *
 * [OUTPUT] Object
 *  {
 *   "results": {
 *     "6197b77e-3942-11ea-a137-2e728ce88125": {
 *       id: "6197b77e-3942-11ea-a137-2e728ce88125",
 *       user: "6197ba94",
 *       reports: ["51ddf1a9"]
 *     }
 *   },
 *   "users": {
 *     "6197ba94": { "id": "6197ba94", "name": "Laura" }
 *   },
 *   "reports": {
 *     "51ddf1a9": {
 *        "id": "51ddf1a9",
 *        "user": "6197ba94",
 *        "document": "356.4325-10",
 *        "status": "em análise",
 *      }
 *    }
 *  }
 * 
 * Solução
 *  1°) Primeiro criei o primeiro nivel das propriedas do obj
 *  .results, .users, .reports e depois fui preenchendo cada uma das props pedidas
 *  No caso dos reports como temos um array usei o Object.values no normalize.reports
 * pra poder pegar os values do objet e interar sobre ele pra montar o reports normalizado 
 */

const normalizeData = unormalized => {
    
    let normalizeObj = {};
    
    normalizeObj.results = {
        [unormalized.id]: {
            id: unormalized.id,
            user: unormalized.user.id,
            reports: Object.values(unormalized.reports).map(item => item.id)
        } 
    }

    normalizeObj.users = {
        [unormalized.user.id]: unormalized.user
    }

    Object.values(unormalized.reports).forEach( report => {
        normalizeObj.reports = {
            ...normalizeObj.reports,
            [report.id]: {
                id: report.id,
                user: unormalized.user.id,
                document: report.result.document,
                status: report.result.status
            }
        }

    })

    return normalizeObj
 
}


module.exports = normalizeData
