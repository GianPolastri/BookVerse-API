const { Language } = require('../db')


const getAllLangs = () => {
    if(Language.length === 0){
        const lenguajes = Language.findAll()
        console.log("Languages successfully charged!");
        return lenguajes;
    } else {
        throw new Error;
    }
}

module.exports = { getAllLangs };