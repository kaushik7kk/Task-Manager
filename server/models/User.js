const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    unique: [true, "Username already taken"],
  },
  password: {
    type: String,
    required: [true, "Enter a valid password"],
  },
  email: {
    type: String,
    required: [true, "Enter a valid e-mail"],
    unique: [true, "E-mail already in use."],
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
