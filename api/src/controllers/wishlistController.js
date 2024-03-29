
const { Book, User, Wishlist, Wishlist_Books } = require('../db')

const getUserWishlist = async (user_id) => {
    const wihsl = await Wishlist.findOrCreate({ where: { UserId: user_id }, include: { model: Book, through: { Wishlist_Books } } });
    if (!wihsl) throw new Error('No es posible encontrar la wishlist');

    return wihsl[0];
}

const addWishlist = async (user_id, book_id) => {
    let wish = await Wishlist.findOne({ where: { UserId: user_id } });
    if (!wish) wish = await Wishlist.create({ UserId: user_id }); 

    const book = await Book.findByPk(book_id);
    if (!book) throw new Error('No se ha podido encontrar el producto');

    console.log(user_id);
    console.log(wish);
    console.log(book);

    wish.addBooks(book);
    return book;
}

const removeWishFromList = async (user_id, book_id) => {
    const user = await User.findByPk(user_id);
    if (!user) throw new Error('No es posible encontrar al usuario');

    const list = await user.getWishlist();
    if (!list) throw new Error('No es posible encontrar la lista del usuario');

    const book = await Book.findByPk(book_id);
    if (!book) throw new Error('No se ha podido encontrar el libro');

    await list.removeBook(book);

    return;
}

const emptyWishlist = async (user_id) => {
    const list = await Wishlist.findOne({ where: { UserId: user_id }, include: { model: Book, through: { Wishlist_Books } } });
    if (!list) throw new Error('No es posible encontrar la lista');

    const user = await User.findByPk(user_id);
    if (!user) throw new Error('No se ha podido encontrar al usuario');

    list.setBooks([]);
}

module.exports = {
    getUserWishlist, addWishlist, removeWishFromList, emptyWishlist
}