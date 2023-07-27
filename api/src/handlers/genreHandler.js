const { allGenres } = require('../controllers/genreControllers');

const getAllGenres = async (req, res) => {
    try {
        const genres = await allGenres()
        res.status(200).json(genres);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getAllGenres };