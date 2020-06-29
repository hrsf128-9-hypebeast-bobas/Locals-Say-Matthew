const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    reviewType: {
        type: String, // "Community" | "Dog Owners" | "Parents" | "Commute"
        required: true
    },
    likes: {
        type: Number,
        default: 0
    }
}, { timestamps: { createdAt: 'created_at' } });


const ReviewModel = mongoose.model('Review', reviewSchema);
module.exports = ReviewModel;