// dependencies
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const authController = require("./controllers/auth");

// config
dotenv.config();

// express initialization
const app = express()

// connect to MONGODB
// Setting the port from env. var. or default to 3000
// alternative port var initialization
// const port = process.env.PORT || "3000"
const port = process.env.PORT ? process.env.PORT : "3000";

mongoose.connect(process.env.MONGODB_URI);  

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB" ${mongoose.connection.name}.`)
});

// mount middleware
// middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false}));

// middleeare fo using HTTP verbs such as PUT and DELTE
app.use(methodOverride("_method"));

// Morgan for logging HTTP requests
app.use(morgan("dev")); 

// router code is actually a type of middleware!
app.use("/auth", authController);
// any HTTP requests from the browser that come to /auth… will auto 
// forward to the router code inside of the authController

// mount routes

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// tell the app to listen for HTTP requests
app.listen(port, () => {
  console.log(`The express app is ready on port ${port}`);
});



