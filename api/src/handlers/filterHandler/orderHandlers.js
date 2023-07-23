const {
    porPrecio,
    porNombre
} = require ("../../controllers/filterControllers/orderControllers")

const orderByPrice = async (req, res) => {
    const { price } = req.query;
    const precio = price === 'asc' ? 'ASC' : 'DESC';
    try {
        const filteredProducts = await porPrecio(precio);
        res.status(200).json(filteredProducts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const orderByTitle = async (req, res) => {
    const { title } = req.query;
    const titulo = title === 'asc' ? 'ASC' : 'DESC';
    try {
        const filteredBooks = await porNombre(titulo);
        res.status(200).json(filteredBooks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { orderByPrice, orderByTitle }