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

    return balance;
}

const dashboardTransactionsController = async () => {

    const transactions = await stripe.charges.list({
        limit: 10,
      });

      return transactions;
}

const dashboardUserController = async () => {
    const users = await User.findAll({paranoid: false});

    return users;
}

module.exports = { dashboardBooksController, dashboardBalanceController, dashboardTransactionsController, dashboardUserController, }