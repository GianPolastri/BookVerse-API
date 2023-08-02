const { dashboardBooksController, } = require('../controllers/dashboardControllers')


const dashboardBooksHandler = async (req, res) => {
    
    try {
        const books = await dashboardBooksController();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = { dashboardBooksHandler, };