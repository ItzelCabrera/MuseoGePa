const mongoose = require('mongoose'); //Object Data Modeling (ODM)
const { MongoClient } = require("mongodb");
const DB_connection = async () => {
  
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.CONNECTION_STRING); //utiliza la URI de mongodb
    console.log(`MongoDB connection success on : ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }

}

module.exports = { DB_connection };