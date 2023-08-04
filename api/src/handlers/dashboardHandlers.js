const {
    dashboardBooksController,
    dashboardBalanceController,
    dashboardTransactionsController,
    dashboardUserController,
    dashboardAllSalesController,
    dashboardSalesByPublisherController,
} = require("../controllers/dashboardControllers");

const dashboardBooksHandler = async (req, res) => {
    try {
        const books = await dashboardBooksController();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const dashboardbalanceHandler = async (req, res) => {
    try {
        const balance = await dashboardBalanceController();
        res.status(200).json(balance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const dashboardTransactionsHandler = async (req, res) => {
    try {
        const transactions = await dashboardTransactionsController();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const dashboardUserHandler = async (req, res) => {
    try {
        const users = await dashboardUserController();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const dashboardAllSalesHandler = async (req, res) => {
    try {
        const allSales = await dashboardAllSalesController();
        res.status(200).json(allSales);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const dashboardSalesByPublisherHandler = async (req, res) => {

    try {
        const salesByPublisher = await dashboardSalesByPublisherController();
        res.status(200).json(salesByPublisher);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    dashboardBooksHandler,
    dashboardbalanceHandler,
    dashboardTransactionsHandler,
    dashboardUserHandler,
    dashboardAllSalesHandler,
    dashboardSalesByPublisherHandler,
};
