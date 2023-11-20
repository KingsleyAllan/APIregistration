const mongoose = require('mongoose');
require('dotenv').config();

// Connecting to the db
mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('mongodb connected');
})
.catch((err) => console.log(err.message));