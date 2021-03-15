const mongoose = require("mongoose");
const RoomModel = require("../models/room");


mongoose.connect("mongodb://localhost:27017/trippy_basics",
{ useUnifiedTopology: true, useNewUrlParser: true } ,
 () => { console.log("connected !!!");
});

RoomModel.deleteMany({}).then(() => {
    RoomModel.create([
        {
          people: 2,
          price: 150,
          isBathroom: true,
        },
        {
           people:1,
           price: 300,
           isBathroom: true,
        }
    ]);
  });

