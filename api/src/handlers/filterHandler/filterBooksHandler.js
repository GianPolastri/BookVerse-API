const {
    filtroGenero,
    filtroNombre,
    filtroFormato,
    filtroLenguaje,
    filtroEditorial,
    filtrarLibrosCombinados,
    porNombre,
    porPrecio
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
    const filtros = {
        title: req.query.title || '',
        genre: req.query.genre || '',
        format: req.query.format || '',
        language: req.query.language || '',
        publisher: req.query.publisher || ''
    }
    const order = req.query.order || '';
   
    try {
        let resultado;
        if (order === 'price') {
            resultado = await porPrecio(filtros, req.query.price);
        } else if (order === 'name') {
            resultado = await porNombre(filtros, req.query.name);
        } else {
            resultado = await filtrarLibrosCombinados(filtros, []);
        }
    
        res.status(200).json(resultado);
/*       const filtros = { title, genre, format, language, publisher };
      const ordenamiento = { price, name }
      const librosFiltrados = await filtrarLibrosCombinados(filtros, ordenamiento);
      res.json(librosFiltrados); */
    } catch (error) {
      res.status(400).json({ 'error': error });
    }
};


/* const express = require('express');
const router = express.Router();
const { filtrarLibrosCombinados, porPrecio, porNombre } = require('./tu_controlador');

router.get('/filter/combined', async (req, res) => {
    const filtros = {
        title: req.query.title || '',
        genre: req.query.genre || '',
        format: req.query.format || '',
        language: req.query.language || '',
        publisher: req.query.publisher || ''
    };

    const ordenamiento = req.query.ordenamiento || ''; // Obtén el ordenamiento desde la consulta

    let resultado;
    if (ordenamiento === 'precio') {
        resultado = await porPrecio(filtros, req.query.precio);
    } else if (ordenamiento === 'nombre') {
        resultado = await porNombre(filtros, req.query.titulo);
    } else {
        resultado = await filtrarLibrosCombinados(filtros, []);
    }

    res.json(resultado);
});

module.exports = router; */


module.exports = {
    filterByFormat,
    filterByGenre,
    filterByName,
    filterByLanguage,
    filterByPublisher,
    combinedFilters
}
