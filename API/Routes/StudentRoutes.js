const express = require("express");
const routes = express.Router();
const Student = require("../Models/studentsModel");
const studentsController = require("../controler/studentControler");
const { verifyAcccessToken } = require("../Helpers/jwt_helper");
//get a list of students from the db
routes.get("/student/:id", studentsController.getStudents);
routes.get("/student" , studentsController.getAllStudents);

// Add a student
// routes.post('/students',(req, res)=>{
//     res.send({type:'Post Request'});
// });
routes.post("/student" , studentsController.AddStudents);

// update students to the db
// routes.put('/students',(req, res)=>{
//     res.send({type:'Update Request'});
// });
routes.put("/updateStudent/:id", studentsController.updateStudents);

// delete a student from the db
// routes.delete('/students',(req, res)=>{
//     res.send({type:'Delete Request'});
// });
routes.delete("/deleteStudent/:id", studentsController.deleteStudents);

module.exports = routes;
