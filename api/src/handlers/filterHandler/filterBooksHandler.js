const {
    filtroGenero,
    filtroNombre,
    filtroFormato
} = require ('../../controllers/filterControllers/filterBooksControllers');


const filterByGenre = async (req, res) => {
    const { name } = req.query;
    try {
        const filteredByGenre = await filtroGenero(name);
        res.status(200).json({filteredByGenre});
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const filterByFormat = async (req, res) => {
    const { name } = req.query;
    try {
        const filteredByFormat = await filtroFormato(name);
        res.status(200).json({filteredByFormat});
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const filterByName = async (req, res) => {
    const { name } = req.query;
    try {
        const filteredName = await filtroNombre(name);
        res.status(200).json({filteredName});
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    filterByFormat,
    filterByGenre,
    filterByName
}

/* http://localhost:3001/filter/byType?productType=Otcom    Topiramate*/