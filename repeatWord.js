function repeatWord(w, num) {
    const cus = []
    if (typeof w === "string" ){
        for (let i = 1; i < num + 1; i++) {
            cus.push(w + i)
        }
        return cus.join(', ')
    } else {
        throw new Error('Невалидные данные')
    }
    
}

module.exports = repeatWord;