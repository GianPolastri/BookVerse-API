const { Country } = require('../db');

const getCountries = async (req, res) => {

    const countries = await Country.findAll();

    return countries;
};

module.exports = { getCountries, };