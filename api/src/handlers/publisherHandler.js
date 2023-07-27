const  getAllPublish  = require('../controllers/publisherControllers');

const getAllPublisher = async (req, res) => {
    try {
        const publishers = await getAllPublish()
        res.status(200).json(publishers);   
    } catch (error) {
        res.status(400).json("Error al cargar las editoriales")
    }    
};

module.exports = getAllPublisher;