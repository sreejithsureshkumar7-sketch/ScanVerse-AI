const mongoose = require("mongoose");

async function connectDB(){
  try{
    await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/scanverse");
    console.log("MongoDB connected");
  }catch(error){
    console.log("MongoDB error:", error.message);
  }
}

module.exports = connectDB;
