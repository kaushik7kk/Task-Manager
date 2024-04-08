const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/routes');
require('dotenv').config();
const app = express();


app.use('/api', routes)

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', error => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database connected...')
})


app.use(express.json());

app.listen(8000, () => {
  console.log(`Server started at ${8000}`);
});
