const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the schema
const studentSchema = new Schema({
  firstname: {
    type: String,
    required: [true, "Firstname is required"],
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required"],
  },
  gender: {
    type: String,
  },
});

// Create a model that's going to rep our collection in the db
const Student = mongoose.model("student", studentSchema);
// Exporting this file so that we can use it in another files
module.exports = Student;
