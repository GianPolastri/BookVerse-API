const { allFormats } = require('../controllers/formatController');

const getAllFormats = async (req, res) => {
    try {
        const formats = await allFormats()
        res.status(200).json(formats);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getAllFormats };