const { error } = require("console");

const getPercents = (p, num) =>{
    if (num === undefined || num === null){
        throw new Error('Невалидные данные')
    }
    return Number((num * (p / 100)).toFixed(2))
}

module.exports = getPercents;