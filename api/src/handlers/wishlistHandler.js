const { getUserWishlist, addWishlist, removeWishFromList, emptyWishlist } = require('../controllers/wishlistController');

const getUserWishlistHandler = async (req, res) => {
    try {
        const { user_id } = req.params
        const wishlist = await getUserWishlist(user_id)
        res.status(200).json(wishlist)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const addWishlistHandler = async (req, res) => {
    try {
        const { user_id, book_id } = req.query
        const addWish = await addWishlist(user_id, book_id)
        res.status(200).json(addWish)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const removeWishlistHandler = async (req, res) => {
    try {
        const { user_id, book_id } = req.query
        const removeWish = await removeWishFromList(user_id, book_id)
        res.status(200).json({ msg: "Book removed from list successfully.", removeWish })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const emptyWishlistHandler = async (req, res) => {
    try {
        const { user_id } = req.query;
        const removeWishlist = await emptyWishlist(user_id);
        res.status(200).json({ msg: "This is the empty Wishlist view", removeWishlist })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = { getUserWishlistHandler, addWishlistHandler, removeWishlistHandler, emptyWishlistHandler };