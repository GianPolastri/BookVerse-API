const { Genre } = require ('../db')
 
const allGenres = () => {
    if (Genre.length === 0) {
        const generos = Genre.findAll()
        console.log("Genres successfully charged!");
        return generos;
    } else {
        console.log("Something went wrong!")
    }
}

module.exports = { allGenres };