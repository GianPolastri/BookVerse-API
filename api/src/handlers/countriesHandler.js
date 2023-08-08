const { getCountries, } = require('../controllers/countriesControllers')

const countriesHandler = async (req, res) => {

    try {
        const countries = await getCountries();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
};

module.exports = { countriesHandler, }