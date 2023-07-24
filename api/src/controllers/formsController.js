const transporter = require('../utils/nodemailer');

const formFooter = async (formData) => {
  try {
    const email = formData.email;
    const mensajeCorreo = {
      from: '"BOOK VERSE" <bookverseweb@gmail.com>',
      to: email, // Asegúrate de obtener el correo electrónico del usuario desde los datos del formulario
      subject: 'Gracias por completar el formulario de LA GRUTA!',
      html: `
      <div style="background-color: #f3f3f3; padding: 20px;">
      <h1 style="color: #B9362C; font-family: 'wicked-grit', sans-serif;">Thank You for Subscribing to Bookverse!</h1>
      <p style="color: #555555;">Hi there!</p>
      <p style="color: #555555;">We appreciate your interest in receiving updates from our bookstore.</p>
      <p style="color: #555555;">We are excited to have you as part of our community, and we'll keep you informed about our latest books and events.</p>
      <p style="color: #555555;">If you have any questions or need more information, feel free to contact us.</p>
      <p style="color: #555555;">Best regards,</p>
      <p style="color: #555555;">The Bookverse Team</p>
  </div>  
        </div>
      `,
    };

    // Envía el correo electrónico utilizando el transporter
    await transporter.sendEmail(mensajeCorreo);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  formFooter
 };