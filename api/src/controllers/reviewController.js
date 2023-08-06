const { Book, User, Review } = require('../db');


const postReview = async (email, content, rating, book_id) => {
    const user = await User.findOne({ where: { email } })
    if(!user) throw new Error ('To leave a comment, you must first log in');
    const book = await Book.findByPk(book_id);
    if(!book) throw new Error ('Book not found');

    const review = await Review.create ({email, content, rating, book_id})
    await book.addReview(review);
    console.log(review);
    return review;
};


module.exports = {
   
    postReview
}
/* { 
    "user_id":"",
    "content": "",
    "rating": "",
    "product_id": 
  } */