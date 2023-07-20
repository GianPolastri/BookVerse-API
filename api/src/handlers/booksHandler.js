 const { 
    getAllBooks,
    postBooks,
    getDetailBooks,
    deleteBook,
    restoreBook,
/*    putStatusProducts,
    updateProducts,
    getFilterAdminProducts,
    getAllAdminProducts*/
} = require ('../controllers/booksControllers'); 

const getAllBooksHandler = async (req, res) => {
    try {
        const allBooks = await getAllBooks();
        res.status(200).json(allBooks); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getDetailBooksHandler = async (req, res) => {
    const { id_books } = req.params;
    try {
        const detailBooks = await getDetailBooks (id_books)
        res.status(200).json(detailBooks); 
    } catch (error) {
        res.status(400).json ({ error: error.message })
    }
};
const postBooksHandler = async (req, res) => {
    const image =  req.file
    const {title, author, price, description, pages, publicationDate, format, language, publisher, genre} = req.body
try {
    const book = await postBooks (image, title, author, price, description, pages, publicationDate, format, language, publisher, genre)
    res.status(200).json("Book successsfully created!")
} catch (error) {
    res.status(400).json({ error: error.message })   
}
}

/*const getFilterSuperAdminProductsHandler = async (req, res) => {
    try {
         const productStatus = await getFilterAdminProducts(); 
           res.status(200).json(productStatus);
           res.status(200).json("esta url es para que el admin vea el estado de los productos")
    } catch (error) {
            res.status(400).json({ error: error.message })
    }
}

const getAllProductsAdminHandler = async (req, res) => {
    try {
         const allProductsAdmin = await getAllAdminProducts();
        res.status(200).json(allProductsAdmin) 
        res.status(200).json("aqui el admin veria todos los productos")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const putStatusProductsHandler = async (req, res) => {
    try {
        const putStatusProduct = await putStatusProducts();
        res.status(200).json(putStatusProduct); 
        res.status(200).json("aqui se modificaria el estado de los productos")
    } catch (error) {
        res.status(400).json({ error: error.message })        
    }
}

const updateProductsHandler = async (req, res) => {
    try {
        const upToDateProducts = await updateProductsHandler();
        res.status(200).json(upToDateProducts); 
        res.status(200).json("aqui se modifican los productos");
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    
}*/

const deleteBooks = async (req, res) => {
    const {id} = req.params
    try {
        const delBook = await deleteBook(id);
        res.status(200).json("Deleted book.");
    } catch (error) {
        res.status(400).json({ error: error.message })        
    }
}

const restoreBooks = async (req, res) => {
    const { id } = req.params 
    try {
        const restBook = await restoreBook(id);
        res.status(200).json("Restored book.");
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
 }

module.exports = {
    getAllBooksHandler,
    getDetailBooksHandler,   
    postBooksHandler,
    deleteBooks,
    restoreBooks,   
/*     getFilterSuperAdminProductsHandler,
    putStatusProductsHandler,
    getAllProductsAdminHandler, 
    updateProductsHandler, */
};