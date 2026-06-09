const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema({
  userId: String,
  objectName: String,
  modelUrl: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Scan", scanSchema);
