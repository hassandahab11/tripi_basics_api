const express = require("express");
const port = 8000;
const app = express();

app.listen(port, () => {
    console.log("Serveur lancé");
  });
  
  app.get("/hotel", (req, res)=>{
    res.render("hotel");
})

app.get("/restaurants", (req, res)=>{
    res.render("restaurants");
})
