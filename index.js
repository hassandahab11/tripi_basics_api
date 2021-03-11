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
  
  app.get("/hotel", (req, res)=>{
    res.render("hotel");
})
app.get("/hotel/:id", (req, res)=>{
  res.render("hotel");
})
app.delete("/hotel/:id", (req, res)=>{
  res.render("hotel");
})
app.put("/hotel", (req, res)=>{
  res.render("hotel");
})
app.post("/hotel", (req, res)=>{
  res.render("hotel");
})



app.get("/restaurants", (req, res)=>{
    res.render("restaurants");
})
app.get("/restaurants/id", (req, res)=>{
  res.render("restaurants");
})
app.post("/restaurants", (req, res)=>{
  res.render("restaurants");
})
app.delete("/restaurants/:id", (req, res)=>{
  res.render("restaurants");
})
app.put("/restaurants/:id", (req, res)=>{
  res.render("restaurants");
})



