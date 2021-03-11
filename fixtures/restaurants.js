const mongoose = require("mongoose");
const restaurantModel = require("../models/restaurant");

mongoose.connect("mongodb://localhost:27017/trippy_basics", () => {
    console.log("connected !!!");
});

const addRestaurant = async () => {
    await restaurantModel.deleteMany({}).exec()
    restaurantModel.create([{
        name: "La Friterie des Poneys Bleus",
        address: "15 rue de la Reunion",
        city: "Paris",
        country: "France",
        stars: 1,
        cuisine: "Belgo-Kirghiz",
        priceCategory: 2
    },
    {
        name: "The Emerald Barbecue",
        address: "1545  Ashford Drive ",
        city: "Alexandria, VA",
        country: "USA",
        stars: 2,
        cuisine: "Meat & meat again",
        priceCategory: 3
    }
    ])
}
addRestaurant()
