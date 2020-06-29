const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featureSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    pathData: { 
        d: {
            type: String,
            required: true
        },
        fill: {
            type: String,
        },
        fillRule: {
            type: String,
        }
    },
    helpfulPercent: {
        type: Number,
        required: true
    }
});


const FeatureModel = mongoose.model('Feature', featureSchema);
module.exports = FeatureModel;