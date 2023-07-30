const { Book, User, Review } = require('../db');


const postReview = async (email, content, rating, book_id) => {

    /* const user = await User.findByPk(user_id); */
    const user = await User.findOne({ where: { email } });
    if(!user) throw new Error ('To leave a comment, you must first log in');
    /* const product = await Book.findByPk(book_id); */
    const book = await Book.findOne({ where: { book_id } });
    if(!book) throw new Error ('Book not found');
    console.log(book_id);

    const review = await Review.create ({ email, content, rating, book_id })
    await Book.addReview(review);
    return review;

/*     { 
        "user_id":"585db0f5-f020-46f9-a47e-6c4a267e3f38",
        "content": "lalala",
        "rating": 2,
        "product_id": "7e198d47-056c-422e-ae69-ec5843a52e22"
      } */
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