const express = require("express");
const routes = require("./Routes/StudentRoutes");
const userRoutes = require("./Routes/UserRoute")
const cors = require("cors")
const app = express();

require("dotenv").config();
require("./Helpers/init_mongodb");
app.use (cors({
  origin:"http://localhost:5173"
}))
app.use(express.json());
app.use(routes);
app.use(userRoutes);
//Handling 404 error
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
//Error Handling:
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
app.listen(process.env.PORT || 4000, function () {
  console.log("Now listening for request on: http://localhost:4000");
});
