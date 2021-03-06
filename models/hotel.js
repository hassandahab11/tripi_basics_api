const mongoose = require('mongoose');


const hotelSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars: {type: Number, min: 1, max: 5},
    hasSpa: Boolean,
    hasPool: Boolean,
    pariceCategory: {type: Number, min: 1, max: 3},
    rooms: [{ type: mongoose.Types.ObjectId, ref: "rooms" }],

});

const hotelModel = mongoose.model("hotels", hotelSchema);

module.exports=hotelModel;
