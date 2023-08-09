const { Console } = require('console');
const { Book, Genre, Review, Format, Language, Publisher } = require('../db');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const CLOUD_NAME = process.env.CLOUD_NAME;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
})


const getAllBooks = async () => {
    const dbBooks = await Book.findAll({
        include: [{
            model: Genre,
            attributes: ["name"],
            through: { attributes: [] }
        },
        {
            model: Review,
            attributes: ['content', 'rating'],
        },
        {
            model: Format,
            attributes: ['name'],
        },
        {
            model: Language,
            attributes: ['name'],
        },
        {
            model: Publisher,
            attributes: ['name'],
        }]
    });
    return dbBooks;
}

const postBooks = async (image, title, author, price, description, pages, publicationDate, format, language, publisher, genre) => {
    const imageFullPath = image.path;
            console.log("outside", imageFullPath);
    
            try {
                console.log("inside", imageFullPath)
                const result = await cloudinary.uploader.upload(imageFullPath, { public_id: `image_${uuidv4()}` });
                const imgLink = result.secure_url;
                await fs.promises.unlink(imageFullPath);
                image = imgLink;
            } catch (error) {
                throw new Error(error);
            } 

    if (!title) {
        throw new Error("No puedes enviar un nombre vacio.")
    };

    const existingBook = await Book.findOne({ where: { title } })

    if (existingBook) {
        throw new Error("El producto ya existe.");
    } else {
        const newBook = await Book.create({ image, title, author, price, description, pages, publicationDate, format, language, publisher, genre })
        newBook.addGenre(genre)
        newBook.addFormat(format)
        newBook.addLanguage(language)
        newBook.addPublisher(publisher) 

        return newBook;
    }
}


const getDetailBooks = async (id) => {
    const books = await Book.findByPk(id, {
        include: [
            {
                model: Genre,
                attributes: ['name'],
                through: { attributes: [] }
            },
            {
                model: Review,
                attributes: ['content', 'rating', 'email']
            },
            {
                model: Review,
                attributes: ['content', 'rating'],
            },
            {
                model: Format,
                attributes: ['name'],
            },
            {
                model: Language,
                attributes: ['name'],
            },
            {
                model: Publisher,
                attributes: ['name'],
            }
        ]
    })
    return books;
}

const deleteBook = async (id) => {
    const deletBook = await Book.findByPk(id)
    const deletedBook = await deletBook.destroy();
    return deletedBook;
}

const restoreBook = async (id) => {
    const resBook = await Book.findByPk(id, { paranoid: false })
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
