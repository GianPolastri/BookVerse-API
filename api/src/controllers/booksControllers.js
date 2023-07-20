const { Console } = require('console');
const { eBook, bookGenre, Reviews } = require('../db');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const CLOUD_NAME = process.env.CLOUD_NAME;
const ASSET_PATH_PRODUCTS = process.env.ASSET_PATH_PRODUCTS;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
})


const getAllBooks = async () => {
    const dbBooks = await eBook.findAll({
        include: [{
            model: bookGenre,
            attributes: [ "name" ],
            through: { attributes: [] }
        },
        {
            model: Reviews,
            attributes: [ 'content', 'rating' ],
    }]
    });
    return dbBooks;
}

const postBooks = async (image, title, author, price, description, pages, publicationDate, format, language, publisher, genre) => {
/*     const imgPath = ASSET_PATH_PRODUCTS;
    
    const files = await fs.promises.readdir(imgPath);
    for (const file of files) {
        const imageFullPath = imgPath + file;
        console.log("outside", imageFullPath);

        try {
            console.log("inside", imageFullPath)
            const result = await cloudinary.uploader.upload(imageFullPath, { public_id: `image_${uuidv4()}` });
            const imgLink = result.secure_url;
            await fs.promises.unlink(imageFullPath);
            image = imgLink;
        } catch (error) {
            throw new Error(error);
        } */

        if(!title) {
            throw new Error("No puedes enviar un nombre vacio.")
        };

        const existingBook = await eBook.findOne({ where: { title } })

        if (existingBook) {
            throw new Error("El producto ya existe.");
        } else {
            const newBook = await eBook.create({ image, title, author, price, description, pages, publicationDate, format, language, publisher, genre })
            newBook.addBookGenre(genre)
/*             newBook.addFormat(format)
            newBook.addLanguage(language)
            newBook.addPublisher(publisher) */

            return newBook;
        }
}

const getDetailBooks = async (id)=> {
    const books = await eBook.findByPk(id, {
        include: [
            {
                model: bookGenre,
                attributes: ['name'],
                through: { attributes: [] }
            },
            {
                model: Reviews,
                attributes: [ 'content', 'rating' ]
            }
        ]
    })
}

const deleteBook = async (id) => {
    const deletBook = await eBook.findByPk(id)
    const deletedBook = await deletBook.destroy();
    return deletedBook;
}

const restoreBook = async (id) => {
    const resBook = await eBook.findByPk(id, { paranoid: false })
    if (!resBook) {
        throw new Error("Producto no encontrado")
    }
    resBook.restore();
    return resBook;
}

module.exports = {
        getAllBooks,
        postBooks,
        getDetailBooks,
        deleteBook,
        restoreBook
} 