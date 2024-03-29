require("dotenv").config();
const { STRIPE_PRIVATE_KEY } = process.env;
const { Book, User, Sale, Publisher, Genre, Language, Country } = require("../db");
const stripe = require("stripe")(STRIPE_PRIVATE_KEY);

const dashboardBooksController = async () => {
    const books = await Book.findAll({ paranoid: false });

    return books;
};

const dashboardBalanceController = async () => {
    const balance = await stripe.balance.retrieve();

    return {
        revenue: balance.pending[0].amount / 100,
        currency: balance.pending[0].currency,
    };
};

const dashboardTransactionsController = async () => {
    const charges = await stripe.charges.list();

    const transactions = charges.data.map((charge) => {
        const transaction = {
            email: charge.billing_details.email,
            name: charge.billing_details.name,
            country: charge.billing_details.address.country,
            amount: parseFloat(charge.amount) / 100,
        };

        return transaction;
    });

    return transactions;
};

const dashboardUserController = async () => {
    const users = await User.findAll({ paranoid: false });

    return users;
};

const dashboardAllSalesController = async () => {

    const allSales = await Sale.findAll();

    return allSales;

};

const dashboardSalesAmountController = async () => {

    const allSales = await Sale.findAll();

    return allSales.length;
}

const dashboardSalesByPublisherController = async () => {

    const publishers = await Publisher.findAll();
    const allSales = await Sale.findAll();

    const salesByPublishers = publishers.map(publisher => {

        const byPublisher = allSales.filter( sale => {
            
            if(sale.book_publisher){
                if(sale.book_publisher === publisher.name) return sale;
            }
        });
        const publihserSales = byPublisher.map( sale => sale.book_quantity);

        const byPublisherObj = {
            publisher: publisher.name,
            sales: publihserSales.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
        };

        console.log(byPublisher);

        return byPublisherObj;
    })

    const salesByPublisherSorted = salesByPublishers.sort((a, b) => b.sales - a.sales);

    return salesByPublisherSorted;
}

const dashboardSalesByGenreController = async () => {

    const genres = await Genre.findAll();
    const allSales = await Sale.findAll();

    const salesByGenres = genres.map(genre => {

        const byGenre = allSales.filter( sale => {
            
            if(sale.book_genre){
                if(sale.book_genre === genre.name) return sale;
            }
        });
        const genreSales = byGenre.map( sale => sale.book_quantity);

        const byGenreObj = {
            genre: genre.name,
            sales: genreSales.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
        };

        return byGenreObj;
    })

    const salesByGenreSorted = salesByGenres.sort((a, b) => b.sales - a.sales);

    return salesByGenreSorted;
};

const dashboardSalesByLanguageController = async () => {

    const languages = await Language.findAll();
    const allSales = await Sale.findAll();

    const salesByLanguage = languages.map(language => {

        const byLanguage = allSales.filter( sale => {
            
            if(sale.book_language){
                if(sale.book_language === language.name) return sale;
            }
        });
        const languageSales = byLanguage.map( sale => sale.book_quantity);

        const byLanguageObj = {
            language: language.name,
            sales: languageSales.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
        };

        return byLanguageObj;
    })

    const salesByLanguageSorted = salesByLanguage.sort((a, b) => b.sales - a.sales);

    return salesByLanguageSorted;
}

const dashboardSalesByCountryController = async () => {

    const countries = await Country.findAll();
    const allSales = await Sale.findAll();

    const salesByCountry = countries.map(country => {

        const byCountry = allSales.filter( sale => {
            
            if(sale.user_country){
                if(sale.user_country === country.name) return sale;
            }
        });
        const languageSales = byCountry.map( sale => sale.book_quantity);

        const byCountryObj = {
            country: country.name,
            sales: languageSales.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
        };

        return byCountryObj;
    })

    const salesByCountrySorted = salesByCountry.sort((a, b) => b.sales - a.sales);

    return salesByCountrySorted;
}

module.exports = {
    dashboardBooksController,
    dashboardBalanceController,
    dashboardTransactionsController,
    dashboardUserController,
    dashboardAllSalesController,
    dashboardSalesAmountController,
    dashboardSalesByPublisherController,
    dashboardSalesByGenreController,
    dashboardSalesByLanguageController,
    dashboardSalesByCountryController,
};
