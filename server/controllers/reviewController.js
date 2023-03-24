import Review from "../models/Review.js";

export async function insertReview(req, res) {
    try {
        const { rating, content } = req.body;

        const review = await Review.create({
            rating,
            content,
            commenter: req.user._id
        });

        console.log(review);
        

        return res.status(201).json({
            msg:"review has been inserted successfully"
        })
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            msg: "error while inserting review"
        })
    }
}