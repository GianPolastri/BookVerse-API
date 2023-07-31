const { postReview } = require('../controllers/reviewController'); 



const postReviewHandler = async (req, res) => {
    const { email, content, rating, book_id } = req.body
    console.log({"email handler" :email});
try {
    const review = await postReview( email, content, rating, book_id )
    res.status(200).json(review);
} catch (error) {
    res.status(400).json({error: error.message});    
}
};

const deleteReviewHandler = async (req, res) => {
try {
    res.status(200).json("This is the view for deleting reviews");
} catch (error) {
    res.status(400).json({error: error.message}); 
}
};

const putReviewHandler = async (req, res) => {
try {
    res.status(200).json("This is the view for modifying reviews");
} catch (error) {
    res.status(400).json({error: error.message}); 
}
};

module.exports = { 
    postReviewHandler, 
    deleteReviewHandler, 
    putReviewHandler, 
};