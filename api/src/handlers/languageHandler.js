const { getAllLangs } = require('../controllers/languageControllers');

const getAllLang = async (req, res) => {
    try {
        const langs = await getAllLangs()
        res.status(200).json(langs);
    } catch (error) {
        res.status(400).json("Something went wrong!")
    }

}

module.exports = {getAllLang} ;