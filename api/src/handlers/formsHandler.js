const formsController = require('../controllers/formsController');

const formFooterHandler = async (req, res) => {
  try {
    await formsController.formFooter(req.body); 
    res.send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending the email');
  }
};


module.exports = {
    formFooterHandler
};
