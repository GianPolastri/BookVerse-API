const { Publisher } = require ('../db')

const getAllPublish = () => {
    if(Publisher.length === 0) {
        const publ = Publisher.findAll();
        console.log("Editoriales correctamente cargadas.");
        return publ;
    } else {
        console.log("Error al intentar cargar las editoriales.");
    }
}

module.exports = getAllPublish;