const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the schema
const loginSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
  },
});

// Create a model that represents our collection in the database
const Login = mongoose.model("login", loginSchema);
// Exporting this file so that we can use it in another files
module.exports = Login;
