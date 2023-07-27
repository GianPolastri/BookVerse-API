const {
    filtroGenero,
    filtroNombre,
    filtroFormato,
    filtroLenguaje,
    filtroEditorial,
    filtrarLibrosCombinados
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

const filterByLanguage = async (req, res) => {
    const { name } = req.query;
    try {
        const filteredLanguage = await filtroLenguaje(name);
        res.status(200).json({filteredLanguage});
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const filterByPublisher = async (req, res) => {
    const { name } = req.query;
    try {
        const filteredPublisher = await filtroEditorial(name);
        res.status(200).json({filteredPublisher});
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const combinedFilters =  async (req, res) => {
    const { title, genre, format, language, publisher } = req.query;
  
    try {
      const filtros = { title, genre, format, language, publisher };
      const librosFiltrados = await filtrarLibrosCombinados(filtros);
      res.json(librosFiltrados);
    } catch (error) {
      res.status(400).json({ 'error': error });
    }
  };


module.exports = {
    filterByFormat,
    filterByGenre,
    filterByName,
    filterByLanguage,
    filterByPublisher,
    combinedFilters
}
