const mongoose = require("mongoose");
const tableModel = require("../models/table");


mongoose.connect("mongodb://localhost:27017/trippy_basics",
{ useUnifiedTopology: true, useNewUrlParser: true } ,
 () => { console.log(" DB connected !!!");
});

tableModel.deleteMany({}).then(() => {
    tableModel.create([
        {
            seat:6,
            isVIP: false,
          
        },
        {
           seat: 2,
           isVIP: true,
        }
    ]);
  });

