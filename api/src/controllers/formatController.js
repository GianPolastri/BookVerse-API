const { Format } = require ('../db')
 
const allFormats = () => {
    if (Format.length === 0) {
        const formatos = Format.findAll()
        console.log("Formats successfully charged!");
        return formatos;
    } else {
        console.log("Something went wrong!")
    }
}

module.exports = { allFormats };