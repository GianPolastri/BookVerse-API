require("dotenv").config();
const { Stripe } = require("stripe");
const { STRIPE_PRIVATE_KEY } = process.env;
const stripe = new Stripe(STRIPE_PRIVATE_KEY);
const { Cart, Cart_Books, User, Book, Sale, Genre, Publisher, Format, Language } = require('../db');
const { emptyCart } = require('./cartControllers')

const checkoutController = async (user_id) => {

    const cart = await Cart.findOne({
        where: { UserId: user_id },
        include: { model: Book, through: { Cart_Books } },
    });
    if (!cart) throw new Error("No es posible encontrar el carrito");

    const resumen = cart.Books.map( book => {

        const line_item = {
            price_data: {
                product_data: {
                    name: book.title,
                    description: book.description,
                },
                currency: 'usd',
                unit_amount: (book.price * 100),
            },
            quantity: book.Cart_Books.quantity,
        };

        
        return line_item;
        
    })
    
    // console.log(resumen);
    const session = await stripe.checkout.sessions.create({
        line_items: resumen,
        mode: 'payment',
        //https://bookverse-m36k.onrender.com/payment/success?user_id=${user_id} http://localhost:3001/payment/success?user_id=${user_id}
        success_url: `https://bookverse-m36k.onrender.com/payment/success?user_id=${user_id}`,
        cancel_url: 'https://bookverse-m36k.onrender.com/payment/cancel',
    });

    return session;

};


const successController = async ( user_id ) => {

    // console.log('Esto llega al success controller: ', user_id);

    const cart = await Cart.findOne({
        where: { UserId: user_id },
        include: { model: Book, through: { Cart_Books } },
    });
    if (!cart) throw new Error("No es posible encontrar el carrito");

    const user = await User.findByPk( user_id );

    cart.Books.map( book => user.addBook(book) );

    // const charge = await stripe.charges.retrieve(session_id);

    console.log('Llegue aca 1');

    cart.Books.map( async book => {

        const ebook = await Book.findByPk(book.id, { include: [
            {
                model: Genre,
                attributes: ['name'],
                through: { attributes: [] }
            },
            {
                model: Language,
            },
            {
                model: Publisher,
            }
        ]});

        console.log('Llegue aca 2');

        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);

        const sale = {
            user_name: user.name,
            user_email: user.email,
            user_country: user.country,
            book: book.title,
            book_price: ebook.price,
            book_quantity: book.Cart_Books.quantity,
            book_genre: ebook.Genres[0].name,
            book_publisher: ebook.Publishers[0].name,
            book_language: ebook.Languages[0].name,
            book_author: book.author,
            date: hoy.toLocaleDateString(),
        }

        console.log(sale);
        console.log('Llegue aca 3');
        await Sale.create(sale);

        const allSales = await Sale.findAll();
        console.log(allSales);

    } );

    const userBooks = await user.getBooks;
    console.log('Llegue aca 4');

    await emptyCart(user_id);

    console.log(userBooks);

    return 'Success!'

}

module.exports = { checkoutController, successController, }

// const mercadopago = require("mercadopago");
// const axios = require("axios");
// const transporter = require('../utils/nodemailer');
// const { Cart, Cart_Products, Products, User, Donation } = require("../db");
// require("dotenv").config();
// const { MP_CART_ACCESS_TOKEN } = process.env;

// const createCartOrder = async (user_id) => {
//     const cart = await Cart.findOne({
//         where: { UserId: user_id },
//         include: { model: Products, through: { Cart_Products } },
//     });
//     if (!cart) throw new Error("No es posible encontrar el carrito");

//     const user = await User.findByPk(user_id, { include: { model: Products }});
//     cart.Products.forEach((prod) => user.addProducts(prod));

//     const resumenPago = cart.Products.map((prod) => {
//         const resumenPago = {
//             title: prod.name,
//             unit_price: prod.price,
//             currency_id: "ARS",
//             quantity: prod.Cart_Products.quantity,
//         };
//         return resumenPago;
//     });

//     mercadopago.configure({
//         access_token: MP_CART_ACCESS_TOKEN,
//     });

//     const result = await mercadopago.preferences.create({
//         items: resumenPago, //Aca va un array de productos con las props: title, unit_price, currency_id, quantity
//         back_urls: {
//             success: "http://localhost:3001/payment/donation/success",
//             failure: "http://localhost:3001/payment/donation/failure",
//             pending: "http://localhost:3001/payment/donation/pending",
//         },
//         notification_url:
//             "https://lagruta.onrender.com/payment/cart/webhook",
//         auto_return: "approved",
//     });

//     console.log(result);

//     return result.body;
// };

// const createDonationOrder = async (user_email, amount) => {

//     // console.log(date);

//     // console.log(user);

//     mercadopago.configure({
//         access_token: MP_CART_ACCESS_TOKEN,
//     });

//     const result = await mercadopago.preferences.create({
//         items: [
//             {
//                 title: "Donación",
//                 unit_price: Number(amount),
//                 currency_id: "ARS",
//                 quantity: 1,
//             },
//         ], //Aca va un array de productos con las props: title, unit_price, currency_id, quantity
//         back_urls: {
//             success: "http://localhost:3001/payment/donation/success",
//             failure: "http://localhost:3001/payment/donation/failure",
//             pending: "http://localhost:3001/payment/donation/pending",
//         },
//         notification_url:
//             "https://lagruta.onrender.com/payment/donation/webhook",
//         auto_return: "approved",
//     });

//     const payment_id = result.body.id;

//     console.log(payment_id, "este es el payment_id");

//     // await axios.get(`https://api.mercadopago.com/v1/payments/${payment_id}?accessToken=${MP_CART_ACCESS_TOKEN}`)
//     // .then(response => console.log(response.data)).catch(error => console.log(error.response.status, error.response.data))

//     // mercadopago.payment.findById(payment_id)
//     //     .then(response => console.log(response.data))
//     //     .catch(console.log({error: error.status}));

//     return result.body;
// };

// const paymentVerification = async (info) => {
//   /*
//     date_approved
//     payer.email
//     status
//     status_detail
//     transaction_amount
//     body.
//     description: 'Donation'
//   */

//   if (info.status === 'approved') {
//       const user = await User.findOne({ where: { email: info.payer.email } });

//       if (user) {
//           const purchase = {
//               date: info.date_approved,
//               amount: info.transaction_amount,
//               payer_email: user.email,
//           };
//           const newPurchase = await Purchase.create(purchase);
//           await user.addPurchase(newPurchase);
//       } else {
//           const purchase = {
//               date: info.date_approved,
//               amount: info.transaction_amount,
//               payer_email: info.payer.email,
//           };
//           const newPurchase = await Purchase.create(purchase);
//           return newPurchase;
//       }

//       const mensajeUsuario = {
//           from: '"Ebook Store" <ebookstore@gmail.com>',
//           to: info.payer.email,
//           subject: 'Thank you for your purchase!',
//           html: `
//             <div style="background-color: #f3f3f3; padding: 20px;">
//               <h1 style="color: #B9362C; font-family: 'dk-lemon-yellow-sun', sans-serif;">Thank you for your purchase!</h1>
//               <p style="color: #555555;">Hello ${info.payer.first_name}</p>
//               <p style="color: #555555;">We are grateful for your support and hope you enjoy your new ebook.</p>
//               <p style="color: #555555;">If you have any questions or need further assistance, feel free to reach out to us.</p>
//               <p style="color: #555555;">We hope to see you again soon at Ebook Store!</p>
//               <p style="color: #555555;">Best regards,</p>
//               <p style="color: #555555;">Ebook Store Team</p>
//             </div>
//           `,
//       };

//       const mensajeEbookStore = {
//           from: '"Ebook Store" <ebookstore@gmail.com>',
//           to: 'ebookstoreorders@gmail.com', // Email address of the ebook store
//           subject: 'New Ebook Purchase',
//           html: `
//             <div style="background-color: #f3f3f3; padding: 20px;">
//               <h1 style="color: #B9362C; font-family: 'wicked-grit', sans-serif;">New Ebook Purchase</h1>
//               <p style="color: #555555;">Hello!</p>
//               <p style="color: #555555;">A new ebook purchase has been made at Ebook Store.</p>
//               <p style="color: #555555;">Donor's Information:</p>
//               <p style="color: #555555;">Name: ${info.payer.first_name}</p>
//               <p style="color: #555555;">Email: ${info.payer.email}</p>
//               <p style="color: #555555;">Total Amount: ${info.transaction_amount}</p>
//               <p style="color: #555555;">Status: ${info.status}</p>
//               <p style="color: #555555;">Status Detail: ${info.status_detail}</p>
//               <p style="color: #555555;">Description: ${info.body.description}</p>
//               <p style="color: #555555;">Best regards,</p>
//               <p style="color: #555555;">Ebook Store Team</p>
//             </div>
//           `,
//       };

//       await Promise.all([
//           transporter.sendMail(mensajeEbookStore),
//           transporter.sendMail(mensajeUsuario),
//       ]);
//   }
// };

// const cartPaymentVerification = async (info) => {
//   /*
//     date_approved
//     payer.email
//     status
//     status_detail
//     transaction_amount
//     body.
//     description: 'Donation'
//   */

//   if (info.status === 'approved') {

//       const mensajeUsuario = {
//           from: '"Ebook Store" <ebookstore@gmail.com>',
//           to: info.payer.email,
//           subject: 'Thank you for your purchase!',
//           html: `
//             <div style="background-color: #f3f3f3; padding: 20px;">
//               <h1 style="color: #B9362C; font-family: 'dk-lemon-yellow-sun', sans-serif;">Thank you for your purchase!</h1>
//               <p style="color: #555555;">Hello ${info.payer.first_name}</p>
//               <p style="color: #555555;">We are grateful for your support and hope you enjoy your new ebook.</p>
//               <p style="color: #555555;">If you have any questions or need further assistance, feel free to reach out to us.</p>
//               <p style="color: #555555;">We hope to see you again soon at Ebook Store!</p>
//               <p style="color: #555555;">Best regards,</p>
//               <p style="color: #555555;">Ebook Store Team</p>
//             </div>
//           `,
//       };

//       const mensajeEbookStore = {
//           from: '"BOOK VERSE" <bookverseweb@gmail.com>',
//           to: 'ebookstoreorders@gmail.com', // Email address of the ebook store
//           subject: 'New Ebook Purchase',
//           html: `
//             <div style="background-color: #f3f3f3; padding: 20px;">
//               <h1 style="color: #B9362C; font-family: 'wicked-grit', sans-serif;">New Ebook Purchase</h1>
//               <p style="color: #555555;">Hello!</p>
//               <p style="color: #555555;">A new ebook purchase has been made at Ebook Store.</p>
//               <p style="color: #555555;">Donor's Information:</p>
//               <p style="color: #555555;">Name: ${info.payer.first_name}</p>
//               <p style="color: #555555;">Email: ${info.payer.email}</p>
//               <p style="color: #555555;">Total Amount: ${info.transaction_amount}</p>
//               <p style="color: #555555;">Status: ${info.status}</p>
//               <p style="color: #555555;">Status Detail: ${info.status_detail}</p>
//               <p style="color: #555555;">Description: ${info.body.description}</p>
//               <p style="color: #555555;">Best regards,</p>
//               <p style="color: #555555;">Ebook Store Team</p>
//             </div>
//           `,
//       };

//       await Promise.all([
//           transporter.sendMail(mensajeEbookStore),
//           transporter.sendMail(mensajeUsuario),
//       ]);

//   }
// };

// module.exports = { createCartOrder, createDonationOrder, paymentVerification, cartPaymentVerification };
