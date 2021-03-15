const mongoose = require("mongoose");
const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant");
const RoomModel = require("./models/room");
const tableModel = require('./models/table');

const express = require("express");
const { request, response } = require("express");
const port = 8000;
const app = express();

mongoose.connect(
  "mongodb://localhost:27017/trippy_basics",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(" DB connecté");
  }
);

app.listen(port, () => {
  console.log("Serveur lancé");
});

app.get("/hotels", async (request, response) => {
  let limitpage = parseInt(request.query.limit);
  let offset = parseInt(request.query.page) * limitpage;
  const hotels = await hotelModel.find().limit(limitpage).skip(offset);
  response.json(hotels);
  console.log(hotels);
});
app.get("/hotels/:id", async (request, response) => {
  const hotels = await hotelModel.findById(
    request.params.id,
    function (error, hotel) {
      response.json(hotel);
    }
  );
});
app.post("/hotels", async (request, response) => {
  try {
    await hotelModel.create(request.body);
    response.send(`${request.body.name}  the hotel Added`);
  } catch (error) {
    console.log(error);
  }
});
app.put("/hotels/:id", async (request, response) => {
  hotelModel
    .findById(request.params.id)
    .then((model) => {
      return Object.assign(model, request.query);
    })
    .then((model) => {
      return model.save();
    })
    .catch((error) => {
      response.send(error);
    });
  response.send("modified");
});
app.delete("/hotels/:id", async (request, response) => {
  try {
    await hotelModel.deleteOne({ _id: request.params.id });
    response.send(`hotel Deleted`);
  } catch (error) {
    console.log(error);
  }
});

app.get("/restaurants", async (request, response) => {
  let limitpage = parseInt(request.query.limit);
  let offset = parseInt(request.query.page) * limitpage;
  const restaurants = await restaurantModel
    .find()
    .limit(limitpage)
    .skip(offset);
  response.json(restaurants);
  console.log(restaurants);
});

app.get("/restaurants/:id", async (request, response) => {
  const restaurants = await restaurantModel.findById(
    request.params.id,
    function (error, resto) {
      response.json(resto);
    }
  );
});

app.post("/restaurants", async (request, response) => {
  try {
    await restaurantModel.create(request.body);
    response.send(`${request.body.name}ajouté`);
  } catch (error) {
    console.log(error);
  }
});

app.put("/restaurants/:id", async (request, response) => {
  restaurantModel
    .findById(request.params.id)
    .then((model) => {
      return Object.assign(model, request.query);
    })
    .then((model) => {
      return model.save();
    })
    .catch((error) => {
      response.send(error);
    });
  response.send("modifié");
});

app.delete("/restaurants/:id", async (request, response) => {
  try {
    await restaurantModel.deleteOne({ _id: request.params.id });
    response.send(`restaurant supprimé`);
  } catch (error) {
    console.log(error);
  }
});

app.get("/table", async (request, response) => {
  let limitpage = parseInt(request.query.limit);
  let offset = parseInt(request.query.page) * limitpage;
  const table = await tableModel.find().limit(limitpage).skip(offset);
  response.json(table);
  console.log(table);
});
app.get("/table/:id", async (request, response) => {
  const table = await tableModel.findById(
    request.params.id,
    function (error, table) {
      response.json(table);
    }
  );
});
app.post("/table", async (request, response) => {
  try {
    await tableModel.create(request.body);
    response.send(`${request.body.name}  the table Added`);
  } catch (error) {
    console.log(error);
  }
});
app.put("/table/:id", async (request, response) => {
  tableModel
    .findById(request.params.id)
    .then((model) => {
      return Object.assign(model, request.query);
    })
    .then((model) => {
      return model.save();
    })
    .catch((error) => {
      response.send(error);
    });
  response.send("modified");
});
app.delete("/table/:id", async (request, response) => {
  try {
    await tableModel.deleteOne({ _id: request.params.id });
    response.send(`table Deleted`);
  } catch (error) {
    console.log(error);
  }
});

app.get("/room", async (request, response) => {
  let limitpage = parseInt(request.query.limit);
  let offset = parseInt(request.query.page) * limitpage;
  const room = await RoomModel.find().limit(limitpage).skip(offset);
  response.json(room);
  console.log(room);
});

app.get("/room/:id", async (request, response) => {
  const room = await RoomModel.findById(
    request.params.id,
    function (error, room) {
      response.json(room);
    }
  );
});

app.post("/room", async (request, response) => {
  try {
    await RoomModel.create(request.body);
    response.send(`${request.body.name}ajouté`);
  } catch (error) {
    console.log(error);
  }
});

app.put("/room/:id", async (request, response) => {
  RoomModel.findById(request.params.id)
    .then((model) => {
      return Object.assign(model, request.query);
    })
    .then((model) => {
      return model.save();
    })
    .catch((error) => {
      response.send(error);
    });
  response.send("modifié");
});

app.delete("/room/:id", async (request, response) => {
  try {
    await RoomModel.deleteOne({ _id: request.params.id });
    response.send(`room supprimé`);
  } catch (error) {
    console.log(error);
  }
});
