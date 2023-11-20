const { default: mongoose } = require("mongoose");
const Student = require("../Models/studentsModel");
const createError= require("http-errors")
module .exports= {
  AddStudents: async (req, res, next) => {
    try {
      const student = new Student(req.body);
      const result = await student.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);

      if (error.name === "ValidationError") {
        next(createError(422, error.message));
        return;
      }

      next(error);
    }
  },
getStudents:  async (req, res, next)=>{
  // res.send({type:'Get Request'});
  // const student = new Student(req.body);
  const id =req.params.id;
    try{
      const student= await Student.findById(id)
      if (!student){
        throw(createError(404, "student does not exist"))
      }
      res.send(student)
  const result = await Student.find({})
  res.send(result);
  }catch(error){
      console.log(error.message);
        if (error instanceof mongoose.CastError){
          next(createError(404, "Invalid student id"))
          return;
        }
        next(error)
  }    
},
getAllStudents:async (req, res,next)=>{
  try{
    const result = await Student.find({})
    res.send(result)
  }catch(error){
    console.log(error.message);
    if(error.name === "ValidationError"){
      next(createError(422,error.message))
      return;
    }
    next(error)
}},
updateStudents:async(req, res)=>{
  try{
      const id = req.params.id;
      const update = req.body;
      const options = {new: true}
      const result = await Student.findByIdAndUpdate(id, update, options)

      res.send(result);
  }catch(error){
      console.log(error.message);
  }
},
deleteStudents: async (req, res, next) => {
  const id = req.params.id;
  try {
    const student = await Student.findByIdAndRemove(id);
    if (!student) {
      throw createError(404, "Student does not exist");
    }
    res.send(student);
  } catch (error) {
    console.error(error.message);
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid student id"));
      return;
    }
    next(error);
  }

}
}
//exported!!