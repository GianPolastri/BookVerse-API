const formsController = require('../controllers/formsController');

const formFooterHandler = async (req, res) => {
  try {
    await formsController.formFooter(req.body); 
    res.send('Correo electrónico enviado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el correo electrónico');
  }
};


module.exports = {
    formFooterHandler
};
