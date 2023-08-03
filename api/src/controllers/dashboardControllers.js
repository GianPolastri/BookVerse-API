require('dotenv').config();
const { STRIPE_PRIVATE_KEY } = process.env;
const { Book, User } = require('../db');
const stripe = require('stripe')(STRIPE_PRIVATE_KEY);

const dashboardBooksController = async () => {
    const books = await Book.findAll({paranoid: false});

    return books;
}

const dashboardBalanceController = async () => {
    
    const balance = await stripe.balance.retrieve();

    return {revenue: balance.pending[0].amount/100, currency: balance.pending[0].currency};
}

const dashboardTransactionsController = async () => {

    const charges = await stripe.charges.list();
    
    const transactions = charges.data.map(charge => {
        
        const transaction = {
            email: charge.billing_details.email,
            name: charge.billing_details.name,
            country: charge.billing_details.address.country,
            amount: parseFloat(charge.amount)/100,
        }

        return transaction;
    })

    return transactions;
}

const dashboardUserController = async () => {
    const users = await User.findAll({paranoid: false});

    return users;
}

module.exports = { dashboardBooksController, dashboardBalanceController, dashboardTransactionsController, dashboardUserController, }