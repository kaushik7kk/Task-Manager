// Requiring libraries.
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
require("dotenv").config();

// Express implementations.
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);


// Database setup
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database connected...");
});

// Start the server.
app.listen(8000, () => {
  console.log(`Server started at ${8000}`);
});
