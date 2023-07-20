const { bookGenre, eBook, Format, Language, Publisher, } = require('../db');
const {
    eBooksTest,
    genreTest,
    publisherTest,
    languageTest,
    formatTest,
} = require('./testData');

const testDataUploader = async () => {

    try {

        const eBooks = await eBook.bulkCreate( eBooksTest, { ignoreDuplicates: true });

        const genre = await bookGenre.bulkCreate( genreTest, { ignoreDuplicates: true });
        
        const publisher = await Publisher.bulkCreate( publisherTest, { ignoreDuplicates: true });

        const language = await Language.bulkCreate( languageTest, { ignoreDuplicates: true });

        const format = await Format.bulkCreate( formatTest, { ignoreDuplicates: true });

        await eBooks.forEach( book => book.addPublisher(Math.floor(Math.random() * 11 + 1)))
        
        await eBooks.forEach( book => book.addFormat(Math.floor(Math.random() * 11 + 1)))
        
        await eBooks.forEach( book => book.addLanguage(Math.floor(Math.random() * 11 + 1)))
        
        await eBooks.forEach( book => book.addGenre(Math.floor(Math.random() * 11 + 1)))



        console.log('Datos cargados exitosamente!');



        return;

    } catch (error) {

        console.log(error);

    }

}

// const testDataCheck = async () => {

//     const activitiesCheck = await Activity.count();

//     const productsCheck = await Products.count();

//     return { activitiesCheck, productsCheck };

// }

module.exports = {
    testDataUploader,
    // testDataCheck
 }; 
