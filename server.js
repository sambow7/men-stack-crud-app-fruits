
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();// Loads the environment variables from .env file
const app = express();

// DB connection
mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


// Import the Fruit model (database)
const Fruit = require("./models/fruit.js");

~~~~~~~~~~~~~~~~
// Middleware
~~~~~~~~~~~~~~~~
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
// app.use(morgan("dev"));

~~~~~~~~~~~~~~~~
// ROUTE
~~~~~~~~~~~~~~~~

// GET
app.get("/", async (req, res) => {
  res.render("/views/index.ejs");
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

// EDIT
app.get("/fruits/:fruitId/edit", async (req, res) => {
  const foundFruit = await Fruit.findById(req.params.fruitId);
  res.render("fruits/edit.ejs", {
    fruit: foundFruit,
  });
})

// DELETE
app.delete("/fruits/:fruitId", async (req, res) => {
  await Fruit.findByIdAndDelete(req.params.fruitId);
  res.redirect("/fruits");
});

// Listening to the server

app.listen(3000, () => {
  console.log('🎧 Port 3000');
});

