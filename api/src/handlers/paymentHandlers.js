const { checkoutController, successController } = require('../controllers/paymentController');

const checkoutHandler = async (req, res) => {
    const { user_id } = req.params;
    try {
        const session = await checkoutController( user_id );
        res.status(201).json(session);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const successHandler = async (req, res) => {
    const { user_id } = req.query;
    try {
        const response = successController( user_id );
        res.status(201).send(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = { checkoutHandler, successHandler, }