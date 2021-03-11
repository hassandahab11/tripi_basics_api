const mongoose = require('mongoose');


const hotelSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars: {type: Number, min: 1, max: 5},
    hasSpa: Boolean,
    pariceCategory: {type: Number, min: 1, max: 3},
});

const hotelModel = mongoose.model("hotels", hotelSchema);

module.exports=hotelModel;
