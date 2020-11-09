/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const extractSize = htmlTemplate => {
    if(!htmlTemplate.length){
        return {
            width: 0,
            height: 0
        }
    }
    const widthSize = htmlTemplate.match(/width: \d+/)[0]
    const heightSize = htmlTemplate.match(/height: \d+/)[0]

    return {
        width: parseInt(widthSize.match(/\d+/)[0]),
        height: parseInt(heightSize.match(/\d+/)[0])
    }
}

module.exports = extractSize
