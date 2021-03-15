const mongoose = require("mongoose");
const hotelModel = require("../models/hotel");


mongoose.connect("mongodb://localhost:27017/trippy_basics",
{ useUnifiedTopology: true, useNewUrlParser: true } ,
 () => { console.log("connected !!!");
});

hotelModel.deleteMany({}).then(() => {
    hotelModel.create([
        {
            name:"Abrigo da Heidi ",
            address: "Estrada da Achada do Teixeira Nr 1",  
            city: "Paris",
            country: "France",
            stars: 3,
            hasSpa: true,
            hasPool:false,
            priceCategory: 5,
        },
        {
            name:"Paris Pilaza Hotel",
            address: "15 rue de la reuion",  
            city: "Paris 75020",
            country: "France",
            stars: 3,
            hasSpa: true,
            hasPool:false,
            priceCategory: 5,
        }
    ]);
  });

