const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
name: String,
address: String,
city: String,
country: String,
stars: { type: Number, min: 1, max: 3 },
cuisine: String,
priceCategory: { type: Number, min: 1, max: 5 },
tables: [{ type: mongoose.Types.ObjectId, ref: "tables" }],
})

const restaurantModel = mongoose.model('restaurant', restaurantSchema);

module.exports = restaurantModel;
