const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the schema
const registerSchema = new Schema({
  firstname: {
    type: String,
    required: [true, "Firstname is required"],
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required"],
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// Create a model that's going to rep our collection in the db
const Register = mongoose.model("register", registerSchema);
// Exporting this file so that we can use it in another files
module.exports = Register;
