
const express = require('express');
const dotenv = require("dotenv");
dotenv.config(); // Loads the environment variables from .env file
const mongoose = require("mongoose");
const app = express();

//Defining connection string
mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Import the Fruit model
const Fruit = require("./models/fruit.js");

~~~~~~~~~~~~~~~~
//Middleware
~~~~~~~~~~~~~~~~
app.use(express.urlencoded({ extended: false }));

// GET
app.get("/", async (req, res) => {
  res.send("index");
});

app.get("/fruits", async (req, res) => {
  const allFruits = await Fruit.find();
  // console.log(allFruits);
  res.render("fruits/index.ejs", { fruits: allFruits });
});

app.get('/fruits/new', (req, res) => {
  res.render('fruits/new.ejs')
});

app.get("/fruits/:fruitId", async (req, res) => {
  const foundFruit = await Fruit.findById(req.params.fruitId);
  res.render("fruits/show.ejs", { fruit: foundFruit });
});

app.get("/fruits/:fruitId/edit", async (req, res) => {
  const foundFruit = await Fruit.findById(req.params.fruitId);
  res.render("fruits/edit.ejs", {
    fruit: foundFruit,
  });
});

// POST
app.post("/fruits", async (req, res) => {
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }
  await Fruit.create(req.body);
  res.redirect("/fruits"); // redirect to index fruits
});



// PUT
app.put("/fruits/:fruitId", async (req, res) => {
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }
  await Fruit.findByIdAndUpdate(req.params.fruitId, req.body);
  res.redirect(`/fruits/${req.params.fruitId}`);
});

// DELETE
app.delete("/fruits/:fruitId", async (req, res) => {
  await Fruit.findByIdAndDelete(req.params.fruitId);
  res.redirect("/fruits");
});





// Listening to the server

app.listen(3000, () => {
  console.log('🎧 Port 3000');
});

