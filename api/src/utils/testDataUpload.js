const { Genre, Book, Format, Language, Publisher, Country, } = require('../db');
const {
    BooksTest,
    genreTest,
    publisherTest,
    languageTest,
    formatTest,
    countries,
} = require('./testData');

const testDataUploader = async () => {

    try {

        const Books = await Book.bulkCreate( BooksTest, { ignoreDuplicates: true });

        const genre = await Genre.bulkCreate( genreTest, { ignoreDuplicates: true });
        
        const publisher = await Publisher.bulkCreate( publisherTest, { ignoreDuplicates: true });

        const language = await Language.bulkCreate( languageTest, { ignoreDuplicates: true });

        const format = await Format.bulkCreate( formatTest, { ignoreDuplicates: true });

        const country = await Country.bulkCreate( countries, { ignoreDuplicates: true });

        // console.log(Books);
        
        await Books.forEach( book => book.addFormat(Math.floor(Math.random() * 4 + 1)))
        
        await Books.forEach( book => book.addLanguage(Math.floor(Math.random() * 4 + 1)))
        
        await Books.forEach( book => book.addGenre(Math.floor(Math.random() * 7 + 1)))
        
        await Books.forEach( book => book.addPublisher(Math.floor(Math.random() * 7 + 1)))

        console.log('Data loaded successfully!');


        return;

    } catch (error) {

        console.log(error);

    }

}

const testDataCheck = async () => {

    const BookCheck = await Book.count();

    console.log(BookCheck);

    const publisherCheck = await Publisher.count();

    return { BookCheck, publisherCheck };

}

module.exports = {
    testDataUploader,
    testDataCheck
 }; 
