const mongoose = require("mongoose");
const hotelModel = require("../models/hotel");


mongoose.connect("mongodb://localhost:27017/trippy_basics", () => {
  console.log("connected !!!");
});

hotelModel.deleteMany({}).then(() => {
    hotelModel.create([

    ]);
  });
