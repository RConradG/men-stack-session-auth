const dotenv = require("dotenv");
const express = require("express");
const mongoose = requrie("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");

// config
dotenv.config();

// express initialization
const app = express()

// Setting the port from env. var. or default to 3000


