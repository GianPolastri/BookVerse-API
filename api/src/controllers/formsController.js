const transporter = require('../utils/nodemailer');

const formFooter = async (formData) => {
  try {
    console.log(formData)
    const email = formData.email;
    const mensajeCorreo = {
      from: '"BOOK VERSE" <bookverseweb@gmail.com>',
      to: email, // Asegúrate de obtener el correo electrónico del usuario desde los datos del formulario
      subject: 'Welcome to the BOOKVERSE family!',
      html: `
      <div style="background-color: #f3f3f3; padding: 20px; font-size:15px;">
      <h1 style="color: #13363e; font-family: 'wicked-grit', sans-serif;">Thank you for subscribing to Bookverse!</h1>
      <p style="color: #000804;">Hi there!</p>
      <p style="color: #b38a83;">We appreciate your interest in receiving updates from our bookstore.</p>
      <p style="color: #000804;">We are excited to have you as part of our community, and we'll keep you informed about our latest books and events.</p>
      <p style="color: #b38a83;">If you have any questions or need more information, feel free to contact us.</p>
      <p style="color: #c2bd98;">Best regards,</p>
      <p style="color: #c2bd98;">The Bookverse Team</p>
  </div>  
        </div>
      `,
    };

    // Envía el correo electrónico utilizando el transporter
    await transporter.sendMail(mensajeCorreo);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  formFooter
 };