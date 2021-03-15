const mongoose = require("mongoose");
const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant");

const express = require("express");
const port = 8000;
const app = express();

mongoose.connect("mongodb://localhost:27017/trippy_basics", () => {
  console.log(" DB connecté");
});

app.listen(port, () => {
  console.log("Serveur lancé");
});

app.get("/hotels", async (req, res) => {
  let limitpage = parseInt(req.query.limit);
  let offset = parseInt(req.query.page) * limitpage;
  const hotels = await hotelModel.find().limit(limitpage).skip(offset);
  res.json(hotels);
  console.log(hotels);
  
});
app.get("/hotels/:id", async (req, res) => {
  const hotels = await hotelModel.findById(
    req.params.id,
    function (err, hotel) {
      res.json(hotel);
    }
  );
});
app.post("/hotels", async (req, res) => {
  try {
    await hotelModel.create(req.body);
    res.send(`${req.body.name}  the hotel Added`);
  } catch (err) {
    console.log(err);
  }
});
app.put("/hotels/:id", async (req, res) => {
  hotelModel
    .findById(req.params.id)
    .then((model) => {
      return Object.assign(model, req.query);
    })
    .then((model) => {
      return model.save();
    })
    .catch((err) => {
      res.send(err);
    });
  res.send("modified");
});
app.delete("/hotels/:id", async (req, res) => {
  try {
    await hotelModel.deleteOne({ _id: req.params.id });
    res.send(`hotel Deleted`);
  } catch (err) {
    console.log(err);
  }
});
