const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
 service: 'gmail',
  auth: {
    user: 'bookverseweb@gmail.com',
    pass: 'wxjzacaxggyafwbi',
  },
});


module.exports = transporter;