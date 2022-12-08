const mongoose = require('mongoose');
mongoose.set("debug", false);
mongoose.set("strictQuery", false);
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CONNECTION);
    console.log("Connection with MongoDB is OK");
  } catch (e) {
    console.log("Error connecting to MongoDB: ", e);
  }
}

module.exports = { dbConnection }