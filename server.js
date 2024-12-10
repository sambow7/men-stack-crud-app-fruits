
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

//Middleware
app.use(express.urlencoded({ extended: false }));

// GET
app.get("/", async (req, res) => {
  // res.send("Hello sam");
  res.render('index.ejs')
});

app.get('/fruits/new', (req, res) => {
  res.render('fruits/new.ejs')
})

app.post("/fruits/new", (req, res) => {
  
});

app.listen(3000, () => {
  console.log('🎧 Port 3000');
});

